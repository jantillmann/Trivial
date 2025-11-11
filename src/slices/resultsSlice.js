import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState: initialState,
  reducers: {
    add_question: (state, action) => {
      state.results.push(action.payload);
    },
  },
});

export const { add_question } = resultsSlice.actions;

export default resultsSlice.reducer;
