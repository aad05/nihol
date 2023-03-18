import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "localeSlice",
  initialState: {
    lang: localStorage.getItem("locale") || "uzLotin",
  },
  reducers: {
    switchLanguage(state, { payload }) {
      localStorage.setItem("locale", payload);
      state.lang = payload;
    },
  },
});

export const { switchLanguage } = localeSlice.actions;
export default localeSlice.reducer;
