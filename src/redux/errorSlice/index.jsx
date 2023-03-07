import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    errorStatus: 500,
  },
  reducers: {
    setErrorStatus(state, { payload }) {
      state.errorStatus = payload || 0;
    },
  },
});

export const { setErrorStatus } = errorSlice.actions;
export default errorSlice.reducer;
