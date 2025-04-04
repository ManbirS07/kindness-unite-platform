const Volunteer = require('../models/Volunteer');

// Create a new volunteer
exports.createVolunteer = async (req, res) => {
    try {
        const volunteer = new Volunteer(req.body);
        await volunteer.save();
        res.status(201).json(volunteer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get volunteer details by ID
exports.getVolunteerById = async (req, res) => {
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
exports.updateVolunteer = async (req, res) => {
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
exports.getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Manage volunteer applications for events
exports.applyForEvent = async (req, res) => {
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