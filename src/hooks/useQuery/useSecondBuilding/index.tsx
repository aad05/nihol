import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../../useAxios";

// * Types
interface RemoveUserType {
  roomNumber?: string;
  clienteID?: string;
  _id?: string;
}
interface UpdateUserType {
  _id?: string;
  arrivalDate?: number;
  limitDays?: string;
}
interface AddUserType {
  extraFunc?: () => any;
  data?: {};
}

// * Cache Handler
const useRemoveUserFromCache = () => {
  const queryClient = useQueryClient();
  return ({ roomNumber, clienteID }: RemoveUserType) => {
    queryClient.setQueryData("accomodation/2", (oldQueryData: any) => {
      const roomsData = oldQueryData.data.data;
      const updatedData = {
        ...oldQueryData,
        data: {
          ...oldQueryData?.data,
          data: roomsData.map((value: { roomNumber: string; cliente?: [] }) =>
            String(value.roomNumber) === String(roomNumber)
              ? {
                  ...value,
                  cliente: value.cliente?.map((value: { clienteID: string }) =>
                    value.clienteID === clienteID
                      ? {
                          ...value,
                          userID: "",
                        }
                      : value
                  ),
                }
              : value
          ),
        },
      };
      return updatedData;
    });
  };
};

const useUpdateUserFromCache = () => {
  const queryClient = useQueryClient();
  return (recievedPr: UpdateUserType) => {
    queryClient.setQueryData(`user/${recievedPr?._id}`, (oldQuery: any) => {
      const updatedData = {
        ...oldQuery,
        data: {
          ...oldQuery?.data,
          data: {
            ...recievedPr,
            remainingDays: new Date(Number(recievedPr?.arrivalDate)).setDate(
              new Date(Number(recievedPr?.arrivalDate)).getDate() +
                Number(recievedPr?.limitDays)
            ),
          },
        },
      };
      return updatedData;
    });
  };
};

const useAddUserToCache = () => {
  const queryClient = useQueryClient();
  return ({
    roomNumber,
    clienteID,
    _id,
  }: {
    roomNumber?: string;
    clienteID?: string;
    _id?: string;
  }) => {
    queryClient.setQueryData("accomodation/2", (oldQueryData: any) => {
      const roomsData = oldQueryData.data.data;
      const updatedData = {
        ...oldQueryData,
        data: {
          ...oldQueryData?.data,
          data: roomsData.map((value: { roomNumber: string; cliente?: [] }) =>
            String(value.roomNumber) === String(roomNumber)
              ? {
                  ...value,
                  cliente: value.cliente?.map((value: { clienteID: string }) =>
                    value.clienteID === clienteID
                      ? {
                          ...value,
                          userID: _id,
                        }
                      : value
                  ),
                }
              : value
          ),
        },
      };
      return updatedData;
    });
  };
};

// * Mutation Handler Hooks
const useRemoveSecondBuildingUser = () => {
  const axios = useAxios();
  const removeFromCache = useRemoveUserFromCache();

  return useMutation((data: RemoveUserType) => {
    removeFromCache(data);
    return axios({
      url: "/accomodation/2/user-delete",
      method: "DELETE",
      body: {
        ...data,
      },
    });
  });
};

const useUpdateSecondBuildingUser = () => {
  const axios = useAxios();
  const updateFromCache = useUpdateUserFromCache();
  return useMutation((data: UpdateUserType) => {
    updateFromCache(data);
    return axios({
      url: "/accomodation/2/user-update",
      method: "POST",
      body: { ...data },
    });
  });
};

const useAddSecondBuildingUser = () => {
  const axios = useAxios();
  const addUserToCache = useAddUserToCache();
  return useMutation(({ extraFunc, data }: AddUserType) => {
    return axios({
      url: "/accomodation/2/create-user",
      method: "POST",
      body: {
        ...data,
      },
    }).then((res) => {
      addUserToCache(res?.data?.data);
      extraFunc?.();
    });
  });
};

export {
  useRemoveSecondBuildingUser,
  useUpdateSecondBuildingUser,
  useAddSecondBuildingUser,
};
