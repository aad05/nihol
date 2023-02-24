import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  switchAddBookingModalVisibility,
  switchAddUserModalVisibility,
} from "../../../redux/modalSlice";
import { useAxios } from "../../useAxios";

// Custom Cache Handlers
const useAddUserToCache = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  return ({ roomNumber, clienteID, _id }) => {
    queryClient.setQueryData(
      `accomodation/${selectedUserData.mutationBuildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) =>
          String(value.roomNumber) === String(roomNumber)
            ? {
                ...value,
                cliente: value.cliente?.map((value) =>
                  value.clienteID === clienteID
                    ? {
                        ...value,
                        userID: _id,
                      }
                    : value
                ),
              }
            : value
        );
      }
    );
  };
};
const useUpdateUserFromCache = () => {
  const queryClient = useQueryClient();
  return (data) => {
    queryClient.setQueryData(`user/${data?._id}`, (oldQueryData) => {
      return { ...oldQueryData, ...data };
    });
  };
};
const useDeleteUserFromCache = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  return ({ clienteID, roomNumber }) => {
    queryClient.setQueryData(
      `accomodation/${selectedUserData.mutationBuildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) =>
          String(value.roomNumber) === String(roomNumber)
            ? {
                ...value,
                cliente: value.cliente?.map((value) =>
                  value.clienteID === clienteID
                    ? {
                        ...value,
                        userID: "",
                      }
                    : value
                ),
              }
            : value
        );
      }
    );
  };
};
const useAddBookedUsertoCache = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  return (data) => {
    const { roomNumber, clienteID, _id } = data;

    queryClient.setQueryData(
      `accomodation/${selectedUserData.mutationBuildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) =>
          String(value.roomNumber) === String(roomNumber)
            ? {
                ...value,
                cliente: value.cliente.map((clienteValue) =>
                  String(clienteValue.clienteID) === String(clienteID)
                    ? {
                        ...clienteValue,
                        isBooked: true,
                      }
                    : clienteValue
                ),
                bookedCliente: value.bookedCliente.map((bookedClienteValue) =>
                  String(bookedClienteValue.bookedClienteID) ===
                  String(clienteID)
                    ? {
                        ...bookedClienteValue,
                        bookedClienteList: [
                          ...bookedClienteValue.bookedClienteList,
                          _id,
                        ],
                      }
                    : bookedClienteValue
                ),
              }
            : value
        );
      }
    );
  };
};
const useUpdateBookedUserFromCache = () => {
  const queryClient = useQueryClient();
  return (data) => {
    queryClient.setQueryData(`booked-user/${data?._id}`, (oldQueryData) => {
      return { ...oldQueryData, ...data };
    });
  };
};
const useDeleteBookedUserFromCache = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  return ({ clienteID, roomNumber, _id }) => {
    queryClient.setQueryData(
      `accomodation/${selectedUserData.mutationBuildingNumber}`,
      (oldQueryData) => {
        return oldQueryData.map((value) =>
          String(value.roomNumber) === String(roomNumber)
            ? {
                ...value,
                cliente: value.cliente.map((clienteValue, index) =>
                  String(clienteValue.clienteID) === String(clienteID)
                    ? {
                        ...clienteValue,
                        isBooked: Boolean(
                          value.bookedCliente[index].bookedClienteList.length -
                            1
                        ),
                      }
                    : clienteValue
                ),
                bookedCliente: value.bookedCliente.map((bookedClienteValue) =>
                  String(bookedClienteValue.bookedClienteID) ===
                  String(clienteID)
                    ? {
                        ...bookedClienteValue,
                        bookedClienteList:
                          bookedClienteValue.bookedClienteList.filter(
                            (value) => String(value) !== String(_id)
                          ),
                      }
                    : bookedClienteValue
                ),
              }
            : value
        );
      }
    );
  };
};

// Custom useMutaions
export const useAddUser = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const axios = useAxios();
  const addUserToCache = useAddUserToCache();
  return useMutation((data) => {
    return axios({
      url: `/accomodation/${selectedUserData.mutationBuildingNumber}/create-user`,
      method: "POST",
      body: {
        ...data,
      },
    }).then((res) => {
      dispatch(switchAddUserModalVisibility({ loading: false, open: false }));
      addUserToCache(res?.data?.data);
    });
  });
};
export const useUpdateUser = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const axios = useAxios();
  const updateUserFromCache = useUpdateUserFromCache();

  return useMutation((data) => {
    updateUserFromCache(data);
    return axios({
      url: `/accomodation/${selectedUserData.mutationBuildingNumber}/update-user`,
      method: "POST",
      body: {
        ...data,
      },
    });
  });
};
export const useDelete = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const axios = useAxios();
  const deleteUserFromCache = useDeleteUserFromCache();

  return useMutation((data) => {
    deleteUserFromCache(data);
    return axios({
      url: `/accomodation/${selectedUserData.mutationBuildingNumber}/delete-user`,
      method: "DELETE",
      body: {
        ...data,
      },
    });
  });
};
export const useUpdateBookedUser = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const axios = useAxios();
  const updateBookedUserFromCache = useUpdateBookedUserFromCache();

  return useMutation((data) => {
    updateBookedUserFromCache(data);
    return axios({
      url: `/accomodation/${selectedUserData.mutationBuildingNumber}/update-booked-user`,
      method: "POST",
      body: {
        ...data,
      },
    });
  });
};
export const useAddBookedUser = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const axios = useAxios();
  const addBookedUsertoCache = useAddBookedUsertoCache();

  return useMutation((data) => {
    dispatch(switchAddBookingModalVisibility({ loading: true, open: true }));
    return axios({
      url: `/accomodation/${selectedUserData.mutationBuildingNumber}/create-booked-user`,
      method: "POST",
      body: {
        ...data,
      },
    }).then((res) => {
      dispatch(
        switchAddBookingModalVisibility({ loading: false, open: false })
      );
      addBookedUsertoCache(res?.data?.data);
    });
  });
};
export const useDeleteBookedUser = () => {
  const { selectedUserData } = useSelector((state) => state.user);
  const axios = useAxios();
  const deleteBookedUserFromCache = useDeleteBookedUserFromCache();

  return useMutation((data) => {
    deleteBookedUserFromCache(data);
    return axios({
      url: `/accomodation/${selectedUserData.mutationBuildingNumber}/delete-booked-user`,
      method: "DELETE",
      body: {
        ...data,
      },
    });
  });
};
