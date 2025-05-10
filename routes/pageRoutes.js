// routes/pageRoutes.js
const express = require('express');
const router = express.Router();
const { contactSubmissions } = require('app.js');

// GET: Home page
router.get('/', (req, res) => {
  res.render('pages/home', { title: 'Home' });
});

// GET: About page
router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

// GET: Events page
router.get('/events', (req, res) => {
  res.render('pages/events', { title: 'Events' });
});

// GET: Contact Us page
router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact Us', error: null });
});

// POST: Handle Contact form submission
router.post('/contact', (req, res) => {
  const { name, surname, email, message } = req.body;

  // Server-side validation
  if (!name || !surname || !email || !message) {
    return res.render('pages/contact', {
      title: 'Contact Us',
      error: 'Please fill out all fields',
    });
  }

  // Store form data in in-memory array
  contactSubmissions.push({
    name,
    surname,
    email,
    message,
    timestamp: new Date(),
  });

  // Log submissions for debugging
  console.log('Current submissions:', contactSubmissions);

  // Redirect to Thank You page
  res.redirect('/thankyou');
});

// GET: Thank You page
router.get('/thankyou', (req, res) => {
  res.render('pages/thankyou', { title: 'Thank You' });
});

module.exports = router;