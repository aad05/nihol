import { FC } from "react";
import { Wrapper } from "./style";
import Mapping from "./Mapping";
import useQueryHandler from "../../../../hooks/useQuery";
import { CustomTitle } from "../../../../Generic/CustomHelpers";
import { Spin } from "antd";

const RoomsParamsMap: FC = () => {
  const useQuery = useQueryHandler();

  const { data, isLoading } = useQuery({
    method: "GET",
    queryLink: "/accomodation/2/room",
    queryKey: `accomodation/2`,
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>Карта</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <Mapping data={data?.data?.data} />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default RoomsParamsMap;
