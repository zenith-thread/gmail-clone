import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInUserWithGooglePopup,
  signOutUser,
  createUserInFirebase,
} from "../../utils/firebase/firebase.utils";

export const signInWithGoogleAsync = createAsyncThunk(
  "user/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      // popup signin
      const result = await signInUserWithGooglePopup();
      const user = result.user;

      // create user in firestore
      await createUserInFirebase(user);

      // return the user back to redux
      return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const signOutUserAsync = createAsyncThunk(
  "user/signOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOutUser();
      return null;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const INITIAL_STATE = {
  currentUser: null,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // signIn With Google
      .addCase(signInWithGoogleAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signInWithGoogleAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(signInWithGoogleAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // signOut User
      .addCase(signOutUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutUserAsync.fulfilled, (state) => {
        state.status = "idle";
        state.currentUser = null;
      })
      .addCase(signOutUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
