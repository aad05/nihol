import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState: {
    profileModalVisibility: false,
    userData: {},
  },
  reducers: {
    switchUserModalVisibility(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
  },
});

export const { switchUserModalVisibility } = navbarSlice.actions;
export default navbarSlice.reducer;
