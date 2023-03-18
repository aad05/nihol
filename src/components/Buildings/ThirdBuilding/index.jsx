import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import ThirdBuildingMapping from "./Mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";

const ThirdBuilding = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: "accomodation/3",
    queryLink: "/accomodation/3/room",
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>3 {t("building.building")}</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <ThirdBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default ThirdBuilding;
