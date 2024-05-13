// Import necessary modules
import mongoose from 'mongoose';
import { expect } from 'chai';
// import models
import User from '../models/User.js';
import Advice from '../models/Advice.js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

// Connect to a test MongoDB database before running tests
before(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/adviseNextStepTest');
});

// Disconnect from MongoDB after tests are done
after(async () => {
    await mongoose.connection.close();
});

// Utility function to clean up data
const clearDatabase = async () => {
    await User.deleteMany({});
    await Advice.deleteMany({});
};

// User model tests
describe('User Model Tests', () => {
    beforeEach(async () => {
        await clearDatabase();
    });

    it('Should create a user with a hashed password successfully', async () => {
        const userData = {
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        };

        const newUser = new User(userData);
        const savedUser = await newUser.save();

        expect(savedUser._id).to.exist;
        expect(savedUser.username).to.equal(userData.username);
        expect(savedUser.email).to.equal(userData.email);
        expect(savedUser.password).not.to.equal('password123'); // Check that password is hashed
    });
});

// Advice model tests
describe('Advice Model Tests', () => {
    let user;

    beforeEach(async () => {
        await clearDatabase();
        // Create and save a user to use as creator in advice tests
        user = new User({
            username: 'advicetestuser',
            email: 'advicetest@example.com',
            password: 'password123'
        });
        await user.save();
    });

    it('Should create an advice successfully', async () => {
        const adviceData = {
            title: 'Invest Wisely',
            description: 'Investments can really pay off if you choose wisely.',
            createdBy: user._id,
            category: 'Finance',
            tags: ['investments', 'money'],
            status: 'active'
        };

        const newAdvice = new Advice(adviceData);
        const savedAdvice = await newAdvice.save();

        expect(savedAdvice._id).to.exist;
        expect(savedAdvice.title).to.equal(adviceData.title);
        expect(savedAdvice.description).to.equal(adviceData.description);
        expect(savedAdvice.createdBy.toString()).to.equal(user._id.toString());
    });
});