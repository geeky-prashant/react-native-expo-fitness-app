import axios from 'axios';
import { RAPID_API_KEY } from '@env';

// Axios instance with default settings
const apiClient = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
});

// Fetch exercises based on the body part
export const fetchExerciseBodyParts = async (bodyPart) => {
  try {
    const response = await apiClient.get(`/exercises/bodyPart/${bodyPart}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching exercises:', error.message);
    throw error; // Re-throw the error for handling in the component
  }
};
