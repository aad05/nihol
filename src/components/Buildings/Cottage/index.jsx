import { CustomTitle } from "../../../Generic/CustomHelpers";
import useQueryHandler from "../../../hooks/useQuery";
import CottageBuildingMapping from "./Mapping";
import { Wrapper } from "./style";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";

const Cottages = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading } = useQuery({
    queryKey: "accomodation/cottage",
    queryLink: "/accomodation/cottage/room",
  });

  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>{t("buildingTypes.cottages")}</CustomTitle>
      <Wrapper.MapWrapper>
        {isLoading ? <Spin /> : <CottageBuildingMapping />}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default Cottages;
