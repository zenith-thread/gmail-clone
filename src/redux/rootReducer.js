import { combineReducers } from "@reduxjs/toolkit";

import { composeEmailReducer } from "./composeEmail/composeEmail.reducer";

export const rootReducer = combineReducers({
  composeEmail: composeEmailReducer,
});
