import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import questionSlice from './slices/questionSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    questions: questionSlice,
  }  
    
  // Optionally you can provide middleware, enhancers, and other configurations
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;