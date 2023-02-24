import { Wrapper } from "./style";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import VoucherUserEditing from "../../../Common/User/Editing/VoucherUserEditing";
import RegularUserEditing from "../../../Common/User/Editing/RegularUserEditing";
import EmptyUser from "../EmptyUser";

const Editing = () => {
  const queryClient = useQueryClient();
  const { selectedUserData } = useSelector((state) => state.user);
  const data = queryClient.getQueryData(`user/${selectedUserData?.userID}`);
  const accomodationData = queryClient.getQueryData(
    `accomodation/${selectedUserData?.mutationBuildingNumber}`
  );

  const [clienteData] = accomodationData[
    selectedUserData?.roomNumber - 1
  ].cliente.filter((value) => value?.clienteID === selectedUserData?.clienteID);

  return (
    <Wrapper>
      {!clienteData.userID ? (
        <EmptyUser />
      ) : data?.hasVoucher ? (
        <VoucherUserEditing />
      ) : (
        <RegularUserEditing />
      )}
    </Wrapper>
  );
};

export default Editing;
