import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createEmailInFirebase,
  getEmailsFromFirebase,
  softDeleteEmailInFirebase,
} from "../../utils/firebase/firebase.utils";

const INITIAL_STATE = {
  isOpen: false,
  emails: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  selectedEmail: {},
  searchField: "",
};

// Thunk: sends email and returns the new doc ID
export const sendEmailAsync = createAsyncThunk(
  "composeEmail/sendEmail",
  async ({ emailFormInputs, from }, thunkAPI) => {
    console.log("🔥 sendEmailAsync called with:", emailFormInputs, from);
    try {
      const emailRef = await createEmailInFirebase(emailFormInputs, from);
      console.log("📝 emailRef returned:", emailRef);
      return emailRef.id;
    } catch (err) {
      console.error("💥 sendEmailAsync caught error:", err);
      return thunkAPI.rejectWithValue(err.message || "Failed to send email");
    }
  }
);

export const getEmailAsync = createAsyncThunk(
  "composeEmail/getEmails",
  async (email, thunkAPI) => {
    try {
      const emails = await getEmailsFromFirebase(email);
      return emails;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.message || "Failed to retrieve emails"
      );
    }
  }
);

export const deleteEmailAsync = createAsyncThunk(
  "composeEmail/deleteEmail",
  async (emailId, thunkAPI) => {
    try {
      await softDeleteEmailInFirebase(emailId);
      // return emailId;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.message || "Failed to retrieve emails"
      );
    }
  }
);

export const composeEmailSlice = createSlice({
  name: "compose_email",
  initialState: INITIAL_STATE,
  reducers: {
    setComposeEmail: (state, action) => {
      state.isOpen = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchInputValue: (state, action) => {
      state.searchField = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmailAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendEmailAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isOpen = false;
      })
      .addCase(sendEmailAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getEmailAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEmailAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emails = action.payload;
      })
      .addCase(getEmailAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteEmailAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteEmailAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedEmail = null;
        // state.emails = state.emails.filter(
        //   (email) => email.id !== action.payload
        // );
      })
      .addCase(deleteEmailAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setComposeEmail, setSelectedEmail, setSearchInputValue } =
  composeEmailSlice.actions;
export const composeEmailReducer = composeEmailSlice.reducer;
