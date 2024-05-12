// import datatypes from mongoose package
import mongoose from 'mongoose';

// Schema to create User model
const UserSchema = new mongoose.Schema(
  // Schema definition
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Use regex to validate email
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    // Array of ids advices created by user
    advices: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Advice',
        },
      ],
  },
  // Schema options
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false
  }
);

// Create virtual property to get count of advices
UserSchema.virtual('adviceCount').get(function () {
    return this.advices.length;
});

// User exported making it available for use in app
export default mongoose.model('User', UserSchema);