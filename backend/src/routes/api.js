import express from 'express';
const router = express.Router(); 
import { getallevents, geteventbyid, createEvent} from '../controllers/eventController.js';
import { getallOrganizations, getorgbyid } from '../controllers/organizationController.js';

// Volunteer routes
// router.post('/volunteers', volunteerController.createVolunteer);
// router.get('/volunteers/:id', volunteerController.getVolunteer);
// router.put('/volunteers/:id', volunteerController.updateVolunteer);
// router.delete('/volunteers/:id', volunteerController.deleteVolunteer);
// router.get('/volunteers', volunteerController.getAllVolunteers);

// Organization routes 
router.post('/register', (req, res) => {
    res.send('Create organization endpoint');
});
router.get('/organizations', getallOrganizations);

router.get('/organizations/:id',getorgbyid);

// Event routes 
router.get('/events', getallevents);
router.get('/events/:id', geteventbyid);
router.post('/create-event',createEvent)

// Admin routes 
router.post('/admins', (req, res) => {
    res.send('Create admin endpoint');
});
router.get('/admins/:id', (req, res) => {
    res.send('Get admin by ID endpoint');
});

export default router;