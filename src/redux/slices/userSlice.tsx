import { createSlice, PayloadAction ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  tokenExpiresIn?: string;
}
export interface LoginPayload {
  email: string;
  password: string;
  tokenExpiresIn?: string;
}
export interface RefreshTokenPayload {
  refreshToken: string;
}

interface Post {
  _id: string;
  title: string;
  link: string;
  // Add other properties as needed
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
  pageNb: 1, // Default page number can be set here
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
    loginSuccess: (state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
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
        state.refreshToken = action.payload.refreshToken;
        
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
        state.refreshToken = action.payload.refreshToken;
        state.error = null; // Clear any previous login errors
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
      builder.addCase(refreshToken.fulfilled, (state, action) => {
        // Update the state with the new access token
        state.accessToken = action.payload;
      });
      builder.addCase(refreshToken.rejected, (state, action) => {
        // Handle the rejection if needed
        logout()
      })
      .addCase(fetchPosts.pending, (state) => {
        state.loadingPosts = true;
      })
      // Add case for fulfilled action
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loadingPosts = false;
        state.posts = [...state.posts, ...action.payload.results];
        state.currentPage = action.payload.currentPage;
      })
      // Add case for rejected action
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loadingPosts = false;
      });
      
  },
});

export const { updatePageNb, loginSuccess, logout, updateAccessToken } = userSlice.actions;

// Async action to handle login
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password, tokenExpiresIn }: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://backend-practice.euriskomobility.me/login", {
        email,
        password,
        token_expires_in: tokenExpiresIn || "30m",
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchPosts = createAsyncThunk(
  "user/fetchPosts",
  async ({ page = 1, pageSize = 10 }: { page?: number; pageSize?: number }, { getState }) => {
    try {
      const { accessToken } = getState().user; // Get accessToken from Redux state
      if (!accessToken) {
        throw new Error("Access token not found");
      }
      const response = await axios.get<PostsResponse>(
        `https://backend-practice.euriskomobility.me/posts?page=${page}&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Use accessToken in the Authorization header
          },
        }
      );
      // Update the current page in the state
      const { currentPage } = getState().user;
      console.log(response.data)
      return { ...response.data, currentPage };
    } catch (error) {
      throw new Error("Error fetching posts");
    }
  }
);



// Async action to handle signup
export const signup = createAsyncThunk(
  "user/signup",
  async ({ email, password, tokenExpiresIn }: SignUpPayload, { rejectWithValue }) => {
    try {
      console.log("handling signup thunk");
      const response = await axios.post("https://backend-practice.euriskomobility.me/signup", {
        email,
        password,
        token_expires_in: tokenExpiresIn || "60m", // Default to 15 minutes if not provided
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Error in signup thunk:", error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (payload: RefreshTokenPayload) => {
    try {
      const response = await axios.post(
        "https://backend-practice.euriskomobility.me/refresh-token",
        {
          refreshToken: payload.refreshToken,
          token_expires_in: "60m",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      // Handle any errors
      throw new Error("Failed to refresh token");
    }
  }
);

export default userSlice.reducer;