import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import FirstFloorMapping from "./FirstFloorMapping";
import SecondFloorMapping from "./SecondFloorMapping";
import ThirdFloorMapping from "./ThirdFloorMapping";
import ModalVisibility from "../Common/ModalVisibility";
import { Wrapper } from "./style";
import { Spin } from "antd";

const SixthBuilding = () => {
  const useQuery = useQueryHandler();

  const { isLoading: firstFloorLoading } = useQuery({
    queryKey: "accomodation/6-1",
    queryLink: "/accomodation/6-1/room",
  });

  const { isLoading: secondFloorLoading } = useQuery({
    queryKey: "accomodation/6-2",
    queryLink: "/accomodation/6-2/room",
  });
  const { isLoading: thirdFloorLoading } = useQuery({
    queryKey: "accomodation/6-3",
    queryLink: "/accomodation/6-3/room",
  });
  return (
    <Wrapper>
      <ModalVisibility />
      <CustomTitle showBackWard={true}>6 Bino</CustomTitle>
      <Wrapper.MapWrapper>
        {firstFloorLoading || secondFloorLoading || thirdFloorLoading ? (
          <Spin />
        ) : (
          <>
            <FirstFloorMapping /> <SecondFloorMapping /> <ThirdFloorMapping />
          </>
        )}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default SixthBuilding;
