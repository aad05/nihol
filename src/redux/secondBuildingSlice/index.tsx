import { createSlice } from "@reduxjs/toolkit";

interface SelectedRoomType {
  buildingNumber?: string;
  roomNumber?: string;
  clienteID?: string;
  roomID?: string;
}

type selectedRoomState = {
  selectedRoom: SelectedRoomType;
};
const initialState: selectedRoomState = {
  selectedRoom: {
    buildingNumber: "2",
  },
};

const selectClientSlice = createSlice({
  name: "secondBuildingSlice",
  initialState,
  reducers: {
    setSelectedRoom(state, action) {
      state.selectedRoom = action.payload;
    },
  },
});

export const { setSelectedRoom } = selectClientSlice.actions;

export default selectClientSlice.reducer;
