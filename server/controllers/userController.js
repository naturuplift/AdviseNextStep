// import models
import User from '../models/User.js';
import Advice from '../models/Advice.js';

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get a single user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        .populate('advice');
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Add a new user
const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Update a user by ID
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete a user and their advice
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).json({ message: 'No user found with this ID!' });
        }
        // delete advice associated with this user's _id
        await Advice.deleteMany({ userId: user._id });

        res.json({ message: 'User and their advice deleted successfully.' });
    } catch (error) {
        res.status(500).json(error);
    }
};

// export models for app use
export {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};