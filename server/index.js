import express from 'express';
import dotenv from 'dotenv';
import roomRouter from './routes/roomRouter.js';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';
//import connectDB from './db.js'; // Import database connection function
import cors from 'cors'; // Import cors using import syntax


dotenv.config();


const port = process.env.PORT || 5000;
const app = express();


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  );
  next();
});

// Middleware
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/user', userRouter);
app.use('/vendor', roomRouter);
app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));

// 404 Error Handling
app.use((req, res) => res.status(404).json({ success: false, message: 'Not Found' }));

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    //await connectDB(); // Connect to MongoDB
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
