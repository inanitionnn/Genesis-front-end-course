import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authSliceReducer from "./reducers/authSlice";
import { coursesApi } from "./services/coursesApi";
import coursesSliceReducer from "./reducers/coursesSlice";

const rootReducer = combineReducers({
  [coursesApi.reducerPath]: coursesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authSliceReducer,
  courses: coursesSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    coursesApi.middleware,
    authApi.middleware,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
