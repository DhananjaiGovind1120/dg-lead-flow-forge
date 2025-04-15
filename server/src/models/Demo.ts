import mongoose from 'mongoose';

const demoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: String,
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  calendarEventId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Demo = mongoose.model('Demo', demoSchema); 