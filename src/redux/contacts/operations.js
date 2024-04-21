import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkApi) => {
    try {
      const {data} = await instance.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/add",
  async (formData, thunkApi) => {
    try {
      const {data} = await instance.post("/contacts", formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkApi) => {
    try {
      const {data} = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);