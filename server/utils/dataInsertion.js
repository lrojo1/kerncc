import User from '../models/User.js'; // Import the User model
import mongoose from 'mongoose';

const createUser = async () => {
  try {
    console.log('MongoDB Connection URI:', process.env.MONGO_CONNECT); // Log the MongoDB connection URI

    // Wait for MongoDB connection to be established
    await mongoose.connect(process.env.MONGO_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Create a new user document
    const newUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      photoURL: 'https://example.com/profile.jpg',
      userType: 'customer'
    });

    // Save the user document to the database
    const savedUser = await newUser.save();

    console.log('User created successfully:', savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

// Call the function to create a new user
createUser();
