
import mongoose from 'mongoose';

// define a schema for the user
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },
  
  password: { type: String, required: true },
  
  photoURL: { type: String, default:''},

  userType: { type: String, enum: ['customer', 'vendor'], default: 'customer' }
});

// create a model
const User = mongoose.model('User', userSchema);
export default User;
