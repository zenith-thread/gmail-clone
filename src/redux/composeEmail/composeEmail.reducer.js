import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isComposeEmail: false,
};

export const composeEmailSlice = createSlice({
  name: "compose_email",
  initialState: INITIAL_STATE,
  reducers: {
    setComposeEmail: (state, action) => {
      state.isComposeEmail = action.payload;
    },
  },
});

export const { setComposeEmail } = composeEmailSlice.actions;
export const composeEmailReducer = composeEmailSlice.reducer;
