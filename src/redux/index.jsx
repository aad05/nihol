import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import navbarSlice from "./navbarSlice";
import userSlice from "./userSlice";
import reportSlice from "./reporSlice";
import errorSlice from "./errorSlice";
import localeSlice from "./localeSlice";

export default configureStore({
  reducer: {
    navbar: navbarSlice,
    modal: modalSlice,
    user: userSlice,
    report: reportSlice,
    error: errorSlice,
    locale: localeSlice,
  },
});
