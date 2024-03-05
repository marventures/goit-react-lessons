import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Please create your own personal backend for development with the UI service mockapi.io
// REFERENCE: https://mockapi.io/
axios.defaults.baseURL = 'https://65e6c47b53d564627a8ceadd.mockapi.io';

// read
export const fetchTasks = createAsyncThunk(
  'tasks/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// delete
export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// RD
