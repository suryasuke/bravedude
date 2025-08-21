import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'color',
  initialState: { color: '#0b0055' },
  reducers: {
    setcolor: (state , action) => {
      state.color = action.payload;
    },
  },
});

export const { setcolor } = counterSlice.actions;
export default counterSlice.reducer;
