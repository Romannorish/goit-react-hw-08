import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})

// const AuthHeader = (token) => {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   };


export const setAuthHeader = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearAuthHeader = () => {
    instance.defaults.headers.common.Authorization = ""
}

export const userRegister = createAsyncThunk(
    "auth/register",
    async (userInfo, thunkAPI) => {
      try {
        const {data}= await instance.post("/users/signup", userInfo);
        setAuthHeader(data.token);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const userLogIn = createAsyncThunk(
    "auth/login",
    async (formData, thunkAPI) => {
      try {
          const {data} = await instance.post("/users/login", formData);
          setAuthHeader(data.token)
  
          return data;
      } catch (err) {
          return thunkAPI.rejectWithValue(err.message);
      }
    }
  );
  
  export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
  
      setAuthHeader(token);
      try {
        const {data} = await instance.get("/users/current");
  
        return data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    },
    {condition: (_, thunkAPI) => {
      const state = thunkAPI.getState()
      const token = state.auth.token
  
      if(!token) return false
      return true
    }}
  );
  
  export const userLogOut = createAsyncThunk(
      "auth/logout",
      async (_, thunkAPI) => {
      try {
          const {data} = await instance.post("/users/logout")
          clearAuthHeader()
      
          return data
      } catch (err) {
          return thunkAPI.rejectWithValue(err.message)
      } 
  })