import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import CottageBuildingMapping from "./Mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";

const Cottages = () => {
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: "accomodation/cottage",
    queryLink: "/accomodation/cottage/room",
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>Коттедж</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <CottageBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default Cottages;
