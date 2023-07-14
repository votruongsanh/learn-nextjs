import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Draft,
} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users?_limit=5"
    );
    const data = await response.json();
    return data[0];
  }
);

const initialState = {
  user: { id: 1, username: "benja" },
  loading: false,
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    resetUser: (state: Draft<typeof initialState>) => {
      state.id = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {
        id: action.payload.id,
        name: action.payload.username,
      };
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
  },
});

// Reducers and actions
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
