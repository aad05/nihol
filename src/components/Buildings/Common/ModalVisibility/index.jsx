import { useSelector } from "react-redux";
import AddBooking from "../Booking/AddModal";
import EditBooking from "../Booking/EditModal";
import InDetail from "../Booking/ObservingInDetail";
import AddModal from "../User/AddModal";
import UserModal from "../UserModal";

const ModalVisibility = () => {
  const {
    userModalVisibility,
    userAddModalVisibility,
    bookingAddModalVisibility,
    bookedUserUpdateModalVisibility,
    bookedUserDetailedModalVisibility,
  } = useSelector((state) => state.modal);
  return (
    <>
      {/* User Modal : Observing, Observing Booked users, Editing */}
      {userModalVisibility && <UserModal />}
      {/* User Add: Adding new user */}
      {userAddModalVisibility.open && <AddModal />}
      {/* Add Booking: Adding new booking */}
      {bookingAddModalVisibility.open && <AddBooking />}
      {/* Observing in datailed */}
      {bookedUserDetailedModalVisibility && <InDetail />}
      {/* Editing booked user */}
      {bookedUserUpdateModalVisibility && <EditBooking />}
    </>
  );
};

export default ModalVisibility;
