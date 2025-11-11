import { configureStore } from '@reduxjs/toolkit';
import questionSliceReducer from './src/slices/questionSlice';
import { resultsSlice } from './src/slices/resultsSlice';
import resultsSliceReducer from './src/slices/resultsSlice';

export default configureStore({
  reducer: {
    questionSlice: questionSliceReducer,
    resultsSlice: resultsSliceReducer,
  },
});
