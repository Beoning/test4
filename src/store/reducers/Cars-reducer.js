import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
      {
        brand: "Ferrari",
        model: "812 Superfast",
        year: 2017,
        fuel: "diesel",
        bodyType: "MPV",
        price: 21000000,
      },
    ],
  },
});

export const selectCars = (state) => state.cars.cars;

export default carsSlice.reducer;
