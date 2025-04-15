import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface DemoRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  date: Date;
}

export const scheduleDemo = async (data: DemoRequest) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/schedule-demo`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to schedule demo');
    }
    throw error;
  }
}; 