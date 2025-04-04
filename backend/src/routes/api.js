const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

// Volunteer routes
router.post('/volunteers', volunteerController.createVolunteer);
router.get('/volunteers/:id', volunteerController.getVolunteer);
router.put('/volunteers/:id', volunteerController.updateVolunteer);
router.delete('/volunteers/:id', volunteerController.deleteVolunteer);
router.get('/volunteers', volunteerController.getAllVolunteers);

// Organization routes (to be implemented)
router.post('/organizations', (req, res) => {
    res.send('Create organization endpoint');
});
router.get('/organizations/:id', (req, res) => {
    res.send('Get organization by ID endpoint');
});

// Event routes (to be implemented)
router.post('/events', (req, res) => {
    res.send('Create event endpoint');
});
router.get('/events/:id', (req, res) => {
    res.send('Get event by ID endpoint');
});

// Admin routes (to be implemented)
router.post('/admins', (req, res) => {
    res.send('Create admin endpoint');
});
router.get('/admins/:id', (req, res) => {
    res.send('Get admin by ID endpoint');
});

module.exports = router;