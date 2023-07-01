import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// http://localhost:3001

axios.defaults.baseURL = `${window.location.origin}`;

export const allCars = createAsyncThunk(
  'user/addCars',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/api/cars');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const carsByReq = createAsyncThunk(
  'user/carsByReq',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(
        `/api/cars/${credentials.options}/${credentials.req}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addCar = createAsyncThunk(
  'user/addCar',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/api/cars`, credentials);

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editCar = createAsyncThunk(
  'user/editCar',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/cars/${credentials._id}`,
        credentials
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCar = createAsyncThunk(
  'user/deleteCar',
  async (credentials, thunkAPI) => {
    try {
      await axios.delete(`/api/cars/${credentials}`);

      return credentials;
    } catch (error) {
      console.error(error);
    }
  }
);
