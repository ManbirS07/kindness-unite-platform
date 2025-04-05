import Event from '../models/Event.js';

export const getallevents = async(req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json({events});
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
