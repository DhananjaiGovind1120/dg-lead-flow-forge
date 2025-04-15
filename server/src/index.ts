import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Demo } from './models/Demo';
import { sendDemoConfirmationEmail, sendAdminNotificationEmail } from './services/email';
import { createCalendarEvent } from './services/calendar';
import path from 'path';

// Load environment variables with explicit path
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Debug environment variables
console.log('Environment Variables:');
console.log('PORT:', process.env.PORT);
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not Set');
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? 'Set' : 'Not Set');

const app = express();
const port = process.env.PORT || 3001;

// MongoDB connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    console.log('Connected to MongoDB successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if we can't connect to the database
  }
};

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Demo scheduling endpoint
app.post('/api/schedule-demo', async (req: Request, res: Response) => {
  try {
    const demoData = req.body;
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'phone', 'date'];
    const missingFields = requiredFields.filter(field => !demoData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Create calendar event
    const calendarEventId = await createCalendarEvent(demoData);

    // Save to database
    const demo = new Demo({
      ...demoData,
      calendarEventId,
      status: 'confirmed'
    });
    await demo.save();

    // Send confirmation emails
    await Promise.all([
      sendDemoConfirmationEmail(demoData.email, demoData.name, new Date(demoData.date)),
      sendAdminNotificationEmail(demoData)
    ]);
    
    res.json({ 
      success: true,
      message: 'Demo scheduled successfully',
      data: demo
    });
  } catch (error) {
    console.error('Error scheduling demo:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to schedule demo'
    });
  }
});

// Get all demos (for admin dashboard)
app.get('/api/demos', async (req: Request, res: Response) => {
  try {
    const demos = await Demo.find().sort({ createdAt: -1 });
    res.json({ success: true, data: demos });
  } catch (error) {
    console.error('Error fetching demos:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch demos'
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 