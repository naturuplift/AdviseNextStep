import mongoose from 'mongoose';

const adviceSchema = new mongoose.Schema({
    // title: A simple string that's required for each 
    // advice entry, to briefly describe it.
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    // description: Detailed description about the advice,
    // explaining what it is and how it can be applied.
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true
    },
    // createdBy: A reference to the User model. This assumes you have a User
    //  model where each advice can be linked to a user who created it. 
    // This helps in maintaining user-related data integrity and 
    // facilitates user management features.
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Creator's User ID is required"]
    },
    // createdAt and updatedAt: Automatically managed fields that record
    // when the advice was created and last updated. 
    // sing Mongoose's timestamps option simplifies this.
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    // This could be used to classify advice into different categories, 
    // making it easier to filter or search through.
    category: {
        type: String,
        required: [true, "Category is required"],
        trim: true
    },
    // An array of strings, allowing multiple tags to be associated
    // with an advice entry for better organization and searchability.
    tags: [{
        type: String
    }],
    // status: An enumeration that represents the state of the advice
    //  (active, inactive, deprecated), useful for managing lifecycle status.
    status: {
        type: String,
        enum: ['active', 'inactive', 'deprecated'],
        default: 'active'
    }
}, { timestamps: true });  // This will automatically add `createdAt` and `updatedAt` fields

const Advice = mongoose.model('Advice', adviceSchema);

export default Advice;