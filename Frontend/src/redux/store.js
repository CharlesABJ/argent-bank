import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import { userApi } from "./user/userApi";
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware
    );
  },
});

export default store;
