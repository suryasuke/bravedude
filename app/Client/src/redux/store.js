import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice.js'; 

const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export default store;
