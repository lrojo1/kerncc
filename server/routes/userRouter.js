// routes/userRouter.js
//import express from 'express';
//import User from '../models/User.js';

import { Router } from "express";
import { login, register, updateProfile } from "../controllers/user.js"
import auth from "../middleware/auth.js";


const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.patch('/updateProfile', auth, updateProfile); //auth makes sure that the profile is only updated by the owner


export default userRouter;

/*async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password, userType });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
*/