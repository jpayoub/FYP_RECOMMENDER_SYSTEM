import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from "react-redux";
import questionSlice from "./questionSlice";



interface UserState {
  pageNb: number;
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
  posts: Post[];
  currentPage: number;
  loadingPosts: boolean;
  major: string | null;
  specificMajor: string | null;
}

export interface SignUpPayload {
  email: string;
  password: string;
  major?: string;
  specificMajor?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

interface SignUpResponse {
  accessToken: string;
  major: string | null;
  specificMajor: string | null;
}




const initialState: UserState = {
  pageNb: 1,
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
  posts: [],
  currentPage: 1,
  loadingPosts: false,
  major: null,
  specificMajor: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePageNb: (state, action: PayloadAction<number>) => {
      state.pageNb = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      auth().signOut();
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.major = action.payload.major;
        state.specificMajor = action.payload.specificMajor;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { updatePageNb, loginSuccess, logout, updateAccessToken } = userSlice.actions;

export const signup = createAsyncThunk(
  "user/signup",
  async ({ email, password, major = null, specificMajor = null }: SignUpPayload, { rejectWithValue }) => {
    try {
      console.log("Starting signup process...");
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log("User created with email:", email);

      const user = userCredential.user; // Access user object directly
      const userEmail = user.email;
      console.log("User ID:", userEmail);

      try {
        await firestore().collection('Users').doc(userEmail).set({
          major: major,
          specific_major: specificMajor
        });
        console.log(`User document created in UsersMajors with ID: ${userEmail}`);
      } catch (firestoreError) {
        console.error("Error writing to Firestore:", firestoreError);
        throw firestoreError;
      }

      const token = await user.getIdToken();
      console.log("Access token retrieved:", token);

      return { accessToken: token, major, specificMajor } as SignUpResponse;
    } catch (error) {
      console.error("Error during signup:", error);
      return rejectWithValue(error.message);
    }
  }
);



export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: LoginPayload, { rejectWithValue }) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const token = await userCredential.user.getIdToken();
      return { accessToken: token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

  

export default userSlice.reducer;