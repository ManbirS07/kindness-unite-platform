import express from 'express';
const router = express.Router(); 
import { getallevents } from '../controllers/eventController.js';

// Volunteer routes
// router.post('/volunteers', volunteerController.createVolunteer);
// router.get('/volunteers/:id', volunteerController.getVolunteer);
// router.put('/volunteers/:id', volunteerController.updateVolunteer);
// router.delete('/volunteers/:id', volunteerController.deleteVolunteer);
// router.get('/volunteers', volunteerController.getAllVolunteers);

// Organization routes 
router.post('/organizations', (req, res) => {
    res.send('Create organization endpoint');
});
router.get('/organizations/:id', (req, res) => {
    res.send('Get organization by ID endpoint');
});

// Event routes 

router.get('/events',getallevents);

// router.get('/events/:id', (req, res) => {
//     res.send('Get event by ID endpoint');
// });

// Admin routes 
router.post('/admins', (req, res) => {
    res.send('Create admin endpoint');
});
router.get('/admins/:id', (req, res) => {
    res.send('Get admin by ID endpoint');
});

export default router;