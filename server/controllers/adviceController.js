// import models
import Advice from '../models/Advice.js'; // Adjusted from Thought

// Get all advice entries
const getAdvice = async (req, res) => {
    try {
        const advices = await Advice.find({});
        res.json(advices);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get a single advice entry by ID
const getAdviceById = async (req, res) => {
    try {
        const advice = await Advice.findById(req.params.adviceId);
        res.json(advice);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Create a new advice entry
// const createAdviceRequest = async (req, res) => {
//     try {
//         const advice = await Advice.create(req.body);
//         res.json(advice);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// };
const createAdviceRequest = async (req, res) => {
    try {
        // Hardcoded advice response
        const hardcodedAdvice = {
            title: "Stay Focused",
            description: "Concentrate on your goals and persistently pursue them.",
            category: "Motivation",
            status: "active",
            tags: ["focus", "goals", "persistence"]
        };
        // Simulate database creation logic
        console.log("Creating new advice:", req.body); // Log the incoming request body
        res.json(hardcodedAdvice); // Return the hardcoded advice
    } catch (error) {
        res.status(500).json(error);
    }
};

// Update an advice entry by its ID
const updateAdviceRequest = async (req, res) => {
    try {
        const advice = await Advice.findByIdAndUpdate(req.params.adviceId, req.body, { new: true });
        res.json(advice);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete an advice entry by its ID
const deleteAdviceRequest = async (req, res) => {
    try {
        const deletedAdvice = await Advice.findByIdAndDelete(req.params.adviceId);
        if (!deletedAdvice) {
            return res.status(404).json({ message: 'No advice found with this ID!' });
        }
        res.json({ message: 'Advice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting advice', error: error.message });
    }
};

// export controller functions for use in routes
export {
    getAdvice,
    getAdviceById,
    createAdviceRequest,
    updateAdviceRequest,
    deleteAdviceRequest
};