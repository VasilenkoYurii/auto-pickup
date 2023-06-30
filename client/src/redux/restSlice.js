import { createSlice } from '@reduxjs/toolkit';
import { allCars, carsByReq, addCar, editCar, deleteCar } from './operations';
import {
  wentWrongNotify,
  notFindNotify,
  successFindNotify,
  successDelite,
  successEdit,
  successAdd,
} from 'helpers/notification';

const initialState = {
  carsData: [],
};

export const userSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(allCars.fulfilled, (state, { payload }) => {
        state.carsData = payload;
      })
      .addCase(allCars.rejected, () => {
        wentWrongNotify();
      })
      .addCase(carsByReq.fulfilled, (state, { payload }) => {
        if (payload.length === 0) {
          notFindNotify();
          return;
        }

        state.carsData = payload;
        successFindNotify(payload.length);
      })
      .addCase(carsByReq.rejected, () => {
        wentWrongNotify();
      })
      .addCase(addCar.fulfilled, (state, { payload }) => {
        state.carsData = [payload, ...state.carsData];
        successAdd();
      })
      .addCase(addCar.rejected, () => {
        wentWrongNotify();
      })
      .addCase(editCar.fulfilled, (state, { payload }) => {
        state.carsData = state.carsData.map(car => {
          if (car._id === payload._id) {
            return payload;
          }
          return car;
        });
        successEdit();
      })
      .addCase(editCar.rejected, () => {
        wentWrongNotify();
      })
      .addCase(deleteCar.fulfilled, (state, { payload }) => {
        state.carsData = state.carsData.filter(car => car._id !== payload);
        successDelite();
      })
      .addCase(deleteCar.rejected, () => {
        wentWrongNotify();
      });
  },
});
