// store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/slices/userSlice';
import companyReducer from '@/redux/slices/companySlice';
import tokenReducer from '@/redux/slices/tokenSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
