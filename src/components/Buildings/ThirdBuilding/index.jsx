import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import ThirdBuildingMapping from "./Mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";

const ThirdBuilding = () => {
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: "accomodation/3",
    queryLink: "/accomodation/3/room",
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>3 Здание</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <ThirdBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default ThirdBuilding;
