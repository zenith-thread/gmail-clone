import { combineReducers } from "@reduxjs/toolkit";

import { composeEmailReducer } from "./composeEmail/composeEmail.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  composeEmail: composeEmailReducer,
  user: userReducer,
});
