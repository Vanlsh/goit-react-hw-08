import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (_, thunkAPI) => {
    try {
      // const { data } = await getContacts();
      // return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (_, thunkAPI) => {
  try {
    //   const { data } = await createContact(contact);
    //   return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    // const { data } = await removeContact(id);
    // return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      // const { data } = await removeContact(id);
      // return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
