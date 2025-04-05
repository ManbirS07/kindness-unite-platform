import Organization from '../models/Organization.js';

export const getallOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find();
        res.status(200).json({ organizations });
    } catch (error) {
        console.error('Error fetching organizations:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getorgbyid = async (req, res) => {
    try {
        console.log(req.params.id)
        const organization = await Organization.findById(req.params.id);
        if (!organization) {
            return res.status(404).json({ message: 'Organization not found' });
        }
        res.status(200).json({organization});
    } catch (error) {
        console.error('Error fetching organization:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}