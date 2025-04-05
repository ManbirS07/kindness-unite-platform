
import Volunteer from '../models/Volunteer.js';
import bcrypt from 'bcryptjs';

// Create a new volunteer
export const createVolunteer = async (req, res) => {
    try {
        const volunteer = new Volunteer(req.body);
        await volunteer.save();
        res.status(201).json(volunteer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Register a new volunteer with file uploads
export const registerVolunteer = async (req, res) => {
    try {
        console.log("Files received:", req.files);
        console.log("Body received:", req.body);
        
        const {fullName, email, phoneNumber, password, confirmPassword, interests, idType, idNumber} = req.body;
   
        if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
          return res.status(400).json({ message: 'Please fill in all required fields.' });
        }
        
        if (password !== confirmPassword) {
          return res.status(400).json({ message: 'Passwords do not match.' });
        }
    
        const existingVolunteer = await Volunteer.findOne({ email });
        if (existingVolunteer) {
          return res.status(409).json({ message: 'Volunteer with this email already exists.'});
        }

        // Get file paths from the multer upload
        let idProofPath = '';
        let resumePath = '';
        let videoPath = '';
        
        if (req.files) {
            idProofPath = req.files.idProof ? req.files.idProof[0].path : '';
            resumePath = req.files.resume ? req.files.resume[0].path : '';
            videoPath = req.files.introVideo ? req.files.introVideo[0].path : '';
        }

        // Validate required files
        if (!idProofPath || !resumePath || !videoPath) {
            return res.status(400).json({ 
                message: 'All files (ID proof, resume, and intro video) are required.',
                missing: {
                    idProof: !idProofPath,
                    resume: !resumePath,
                    introVideo: !videoPath
                }
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create volunteer model with the parsed interests array
        let interestsArray = [];
        try {
            interestsArray = JSON.parse(interests);
        } catch (err) {
            console.error('Error parsing interests:', err);
            // If parsing fails, treat as a single string
            interestsArray = [interests];
        }

        const newVolunteer = new Volunteer({
            fullName,
            email,
            phone: phoneNumber,
            password: hashedPassword,
            areaOfInterests: interestsArray,
            govId: {
                idType,
                idNumber,
                idDocument: idProofPath
            },
            resume: resumePath,
            introVideo: videoPath
        });
        
        await newVolunteer.save();
        res.status(201).json({ message: 'Registration successful.' });
      } catch (err) {
        console.error('Error registering volunteer:', err);
        res.status(500).json({ message: 'Server error: ' + err.message });
      }
};

// Get volunteer details by ID
export const getVolunteerById = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }
        res.json(volunteer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update volunteer information
export const updateVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }
        res.json(volunteer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all volunteers
export const getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Manage volunteer applications for events
export const applyForEvent = async (req, res) => {
    const { volunteerId, eventId } = req.body;
    try {
        const volunteer = await Volunteer.findById(volunteerId);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }
        volunteer.completedEvents.push(eventId);
        await volunteer.save();
        res.status(200).json(volunteer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
