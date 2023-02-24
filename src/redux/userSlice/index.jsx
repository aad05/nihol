import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    selectedUserData: {},
    selectedBookedData: {},
  },
  reducers: {
    setSelectedUserData(state, { payload }) {
      state.selectedUserData = payload;
    },
    setSelectedBookedData(state, { payload }) {
      state.selectedBookedData = payload;
    },
  },
});

export const { setSelectedUserData, setSelectedBookedData } = userSlice.actions;
export default userSlice.reducer;
