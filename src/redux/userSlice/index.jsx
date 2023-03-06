import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    selectedUserData: {},
    selectedBookedData: {},
    movingUserData: {},
  },
  reducers: {
    setSelectedUserData(state, { payload }) {
      state.selectedUserData = payload;
    },
    setSelectedBookedData(state, { payload }) {
      state.selectedBookedData = payload;
    },
    setMovingUserData(state, { payload }) {
      state.movingUserData = payload;
    },
  },
});

export const { setSelectedUserData, setSelectedBookedData, setMovingUserData } =
  userSlice.actions;
export default userSlice.reducer;
