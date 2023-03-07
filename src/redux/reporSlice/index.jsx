import { createSlice } from "@reduxjs/toolkit";
import { allChecked, reportCheckBoxOptions } from "../../Generic/InputAPI";

const reportSlice = createSlice({
  name: "reportSlice",
  initialState: {
    selectedOptions: allChecked || [],
    indeterminate: false,
    checkAll: true,
    options: reportCheckBoxOptions,
  },
  reducers: {
    setSelectedOptions(state, { payload }) {
      state.selectedOptions = payload;
      state.indeterminate =
        !!payload.length && payload.length < reportCheckBoxOptions.length;

      state.checkAll = payload.length === reportCheckBoxOptions.length;
    },
    setCheckAll(state, { payload }) {
      if (payload.checked) {
        state.selectedOptions = allChecked;
        state.checkAll = true;
        state.indeterminate = false;
      } else {
        state.checkAll = false;
        state.indeterminate = true;
        state.selectedOptions = [];
      }
    },
  },
});

export const { setSelectedOptions, setCheckAll } = reportSlice.actions;
export default reportSlice.reducer;
