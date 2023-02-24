import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import ThirdBuildingMapping from "./Mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";

const ThirdBuilding = () => {
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: "accomodation/4",
    queryLink: "/accomodation/4/room",
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>4 Здание</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <ThirdBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default ThirdBuilding;
