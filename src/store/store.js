import { configureStore } from "@reduxjs/toolkit";
import CarsReducer from "./reducers/Cars-reducer";

export const store = configureStore({
  reducer: {
    cars: CarsReducer,
  },
});
