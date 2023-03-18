import { createSlice } from "@reduxjs/toolkit";
import { allChecked } from "../../Generic/InputAPI";

const reportSlice = createSlice({
  name: "reportSlice",
  initialState: {
    selectedOptions: allChecked || [],
    indeterminate: false,
    checkAll: true,
  },
  reducers: {
    setSelectedOptions(state, { payload }) {
      state.selectedOptions = payload;
      state.indeterminate = !!payload.length && payload.length < 2;

      state.checkAll = payload.length === 2;
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
