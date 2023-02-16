import { configureStore } from "@reduxjs/toolkit";
import secondBuildingSlice from "./secondBuildingSlice";

const store = configureStore({
  reducer: {
    secondBuilding: secondBuildingSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
