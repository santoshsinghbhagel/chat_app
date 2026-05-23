const bcrypt = require('bcrypt');
const db = require('../config/db');

exports.getLoginPage = (req, res) => {
  if (req.session && req.session.admin) {
    return res.redirect('/admin/dashboard');
  }
  res.render('admin/login', { error: null });
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.render('admin/login', { error: 'Please enter both username and password' });
  }

  try {
    const result = await db.query('SELECT * FROM admins WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      return res.render('admin/login', { error: 'Invalid username or password' });
    }

    const admin = result.rows[0];
    const match = await bcrypt.compare(password, admin.password);

    if (match) {
      req.session.admin = { id: admin.id, username: admin.username };
      req.session.flash = { type: 'success', message: 'Welcome back, ' + admin.username + '!' };
      return res.redirect('/admin/dashboard');
    } else {
      return res.render('admin/login', { error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).render('error', {
      code: 500,
      message: 'Server error',
      description: 'Something went wrong. Please try again later.'
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
};

exports.getDashboard = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM groups ORDER BY created_at DESC');
    res.render('admin/dashboard', { admin: req.session.admin, groups: result.rows });
  } catch (error) {
    console.error('Dashboard error:', error);
    req.session.flash = { type: 'error', message: 'Could not load dashboard. Database error.' };
    res.redirect('/admin/login');
  }
};

exports.createGroup = async (req, res) => {
  const { name, description } = req.body;
  
  if (!name || !name.trim()) {
    req.session.flash = { type: 'error', message: 'Group name is required.' };
    return res.redirect('/admin/dashboard');
  }

  try {
    await db.query(
      'INSERT INTO groups (name, description, created_by, is_enable) VALUES ($1, $2, $3, $4)',
      [name.trim(), description ? description.trim() : '', req.session.admin.id, req.body.is_enable || 'y']
    );
    req.session.flash = { type: 'success', message: `Group "${name}" created successfully!` };
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Create group error:', error);
    if (error.code === '23505') { // unique violation
      req.session.flash = { type: 'error', message: `A group named "${name}" already exists.` };
    } else {
      req.session.flash = { type: 'error', message: 'Failed to create group. Please try again.' };
    }
    res.redirect('/admin/dashboard');
  }
};

exports.updateGroup = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  if (!name || !name.trim()) {
    req.session.flash = { type: 'error', message: 'Group name cannot be empty.' };
    return res.redirect('/admin/dashboard');
  }

  try {
    const result = await db.query(
      'UPDATE groups SET name = $1, description = $2, is_enable = $3 WHERE id = $4 RETURNING *',
      [name.trim(), description ? description.trim() : '', req.body.is_enable || 'y', id]
    );
    if (result.rows.length === 0) {
      req.session.flash = { type: 'error', message: 'Group not found.' };
    } else {
      req.session.flash = { type: 'success', message: `Group updated to "${name}" successfully!` };
    }
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Update group error:', error);
    if (error.code === '23505') {
      req.session.flash = { type: 'error', message: `A group named "${name}" already exists.` };
    } else {
      req.session.flash = { type: 'error', message: 'Failed to update group.' };
    }
    res.redirect('/admin/dashboard');
  }
};

exports.deleteGroup = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM groups WHERE id = $1 RETURNING name', [id]);
    if (result.rows.length > 0) {
      req.session.flash = { type: 'success', message: `Group "${result.rows[0].name}" deleted.` };
    } else {
      req.session.flash = { type: 'error', message: 'Group not found.' };
    }
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Delete group error:', error);
    req.session.flash = { type: 'error', message: 'Failed to delete group.' };
    res.redirect('/admin/dashboard');
  }
};
