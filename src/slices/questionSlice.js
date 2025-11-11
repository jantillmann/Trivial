import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
};
export const questionSlice = createSlice({
  name: 'questions',
  initialState: initialState,
  reducers: {
    add_questions: (state, action) => {
      //   console.log(state.questions);
      //   console.log(action.payload);
      //   console.log(action.payload);
      state.questions.push(...action.payload);
    },
  },
});

export const { add_questions } = questionSlice.actions;

export default questionSlice.reducer;
