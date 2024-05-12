// Import mongoose to manage MongoDB interactions
import mongoose from 'mongoose';

// Mongo URI connection string 
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/adviseNextStep";

// connect to the database
async function connectToDatabase() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

// Initialize the connection
connectToDatabase();

// Use to debug log mongo queries being executed
mongoose.set('debug', true);

// configured mongoose instance exported
// making it available for use in app
export default mongoose.connection;