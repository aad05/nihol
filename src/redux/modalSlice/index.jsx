import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    userModalVisibility: false,
    bookedUserModalVisibility: false,
    userAddModalVisibility: {
      open: false,
      loading: false,
    },
    bookingAddModalVisibility: {
      open: false,
      loading: false,
    },
    bookedUserActivateModalVisibility: {
      open: false,
      loading: false,
    },
    bookedUserUpdateModalVisibility: false,
    bookedUserDetailedModalVisibility: false,
    reportOptionModalVisibility: false,
  },
  reducers: {
    switchUserModalVisibility(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
    switchAddUserModalVisibility(state, { payload }) {
      state.userAddModalVisibility = {
        ...payload,
      };
    },
    switchBookedUserActivateModalVisibility(state, { payload }) {
      state.bookedUserActivateModalVisibility = {
        ...payload,
      };
    },
    switchAddBookingModalVisibility(state, { payload }) {
      state.bookingAddModalVisibility = {
        ...payload,
      };
    },
    switchUpdateBookingModalVisibility(state) {
      state.bookedUserUpdateModalVisibility =
        !state.bookedUserUpdateModalVisibility;
    },
    switchBookedUserDetailedModalVisibility(state) {
      state.bookedUserDetailedModalVisibility =
        !state.bookedUserDetailedModalVisibility;
    },
    switchBookedUserModalVisibility(state) {
      state.bookedUserModalVisibility = !state.bookedUserModalVisibility;
    },
    switchReportOptionsModalVisibility(state) {
      state.reportOptionModalVisibility = !state.reportOptionModalVisibility;
    },
  },
});

export const {
  switchUserModalVisibility,
  switchAddUserModalVisibility,
  switchAddBookingModalVisibility,
  switchBookedUserModalVisibility,
  switchReportOptionsModalVisibility,
  switchUpdateBookingModalVisibility,
  switchBookedUserDetailedModalVisibility,
  switchBookedUserActivateModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
