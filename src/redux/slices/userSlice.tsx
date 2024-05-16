import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';

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
}

export interface SignUpPayload {
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

interface Post {
  _id: string;
  title: string;
  link: string;
}

interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface PostsResponse {
  results: Post[];
  pagination: PaginationMetadata;
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
  async ({ email, password }: SignUpPayload, { rejectWithValue }) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const token = await userCredential.user.getIdToken();
      return { accessToken: token };
    } catch (error) {
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