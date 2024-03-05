import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, deleteTask } from './taskOperations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteTask.pending, () => {})
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, () => {}),
});

export const tasksReducer = tasksSlice.reducer;
