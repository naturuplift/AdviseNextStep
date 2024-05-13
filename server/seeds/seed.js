// Include packages needed for this application
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { User, Advice} from '../models/index.js';

// MongoDB URI connection string
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/adviseNextStep";

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Sample users
const users = [
    { username: 'john_doe', email: 'john.doe@example.com', password: 'password123' },
    { username: 'jane_doe', email: 'jane.doe@example.com', password: 'password123' }
];

// Sample advices
const advices = [
    {
        title: 'Stay Positive',
        description: 'Maintaining a positive outlook is essential for overcoming challenges.',
        category: 'Well-being',
        tags: ['positivity', 'mindset'],
        status: 'active'
    },
    {
        title: 'Invest Early',
        description: 'Start investing as early as possible to benefit from compound interest.',
        category: 'Finance',
        tags: ['investing', 'savings'],
        status: 'active'
    }
];

// Seed the database
const seedDB = async () => {
    await connectDB();
    
    // Clean up the existing database
    await User.deleteMany();
    await Advice.deleteMany();

    console.log("Hashing passwords...");
    for (let user of users) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    
    console.log("Inserting new users...");
    const createdUsers = await User.insertMany(users);
    console.log("Users created:", createdUsers);

    // Assign each advice a random creator from the created users
    console.log("Assigning users to advices and inserting...");
    const updatedAdvices = advices.map(advice => ({
        ...advice,
        createdBy: createdUsers[Math.floor(Math.random() * createdUsers.length)]._id
    }));

    // Insert updated advices
    await Advice.insertMany(updatedAdvices);
    console.log("Advices created successfully");

    console.log('Database seeded successfully');
    process.exit(0); // Ensures the script exits after successful execution
};

seedDB().catch(err => {
    console.error('Failed to seed database:', err);
    process.exit(1); // Ensures the script exits with an error code
});