
import express from 'express';
const router = express.Router(); 
import { getallevents, geteventbyid, createEvent} from '../controllers/eventController.js';
import { getallOrganizations, getorgbyid, createOrganization } from '../controllers/organizationController.js';
import { createVolunteer, getVolunteerById, updateVolunteer, getAllVolunteers, registerVolunteer } from '../controllers/volunteerController.js';
import multer from 'multer';

// Configure multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = 'uploads/';
    if (file.fieldname === 'resume') {
      uploadPath += 'resumes/';
    } else if (file.fieldname === 'introVideo') {
      uploadPath += 'videos/';
    } else if (file.fieldname === 'idProof') {
      uploadPath += 'documents/';
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Volunteer routes
router.post('/volunteers/register', createVolunteer);
router.post('/volunteer/register', 
  upload.fields([
    { name: 'idProof', maxCount: 1 },
    { name: 'resume', maxCount: 1 },
    { name: 'introVideo', maxCount: 1 }
  ]), 
  registerVolunteer
);
router.get('/volunteers/:id', getVolunteerById);
router.put('/volunteers/:id', updateVolunteer);
router.get('/volunteers', getAllVolunteers);

// Organization routes 
router.post('/organizations/register', createOrganization);
router.get('/organizations', getallOrganizations);
router.get('/organizations/:id', getorgbyid);

// Event routes 
router.get('/events', getallevents);
router.get('/events/:id', geteventbyid);
router.post('/create-event', createEvent);

// Admin routes 
router.post('/admins', (req, res) => {
    res.send('Create admin endpoint');
});
router.get('/admins/:id', (req, res) => {
    res.send('Get admin by ID endpoint');
});

export default router;
