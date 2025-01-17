// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlice";
import companyReducer from "@/redux/slices/companySlice";
import tokenReducer from "@/redux/slices/tokenSlice";
import messageReducer from "@/redux/slices/messageSlice";
import projectReducer from "@/redux/slices/projectSlice";
import siteReducer from "@/redux/slices/siteSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
    token: tokenReducer,
    message: messageReducer,
    project: projectReducer,
    site: siteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
