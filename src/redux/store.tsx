import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import questionSlice from './slices/questionSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
    questions: questionSlice,
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['user.error'], // Exclude the 'error' field from being persisted
      },
    }),
  // Optionally you can provide middleware, enhancers, and other configurations
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;