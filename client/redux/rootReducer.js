import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import categoriesSlice from "./slices/categoriesSlice";
import bannerSlice from "./slices/bannerSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  category: categoriesSlice,
  banner: bannerSlice,
});

export default rootReducer;
