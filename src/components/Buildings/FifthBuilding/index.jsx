import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import FirstFloorMapping from "./FirstFloorMapping";
import SecondFloorMapping from "./SecondFloorMapping";
import { Wrapper } from "./style";
import { Spin } from "antd";

const FifthBuilding = () => {
  const useQuery = useQueryHandler();

  const { isLoading: firstFloorLoading } = useQuery({
    queryKey: "accomodation/5-1",
    queryLink: "/accomodation/5-1/room",
  });

  const { isLoading: secondFloorLoading } = useQuery({
    queryKey: "accomodation/5-2",
    queryLink: "/accomodation/5-2/room",
  });
  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>5 Здание</CustomTitle>
      <Wrapper.MapWrapper>
        {firstFloorLoading && secondFloorLoading ? (
          <Spin />
        ) : (
          <>
            <FirstFloorMapping /> <SecondFloorMapping />
          </>
        )}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default FifthBuilding;
