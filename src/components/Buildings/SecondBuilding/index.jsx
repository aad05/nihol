import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import SecondBuildingMapping from "./Mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";

const SecondBuilding = () => {
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: "accomodation/2",
    queryLink: "/accomodation/2/room",
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>2 Bino</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <SecondBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default SecondBuilding;
