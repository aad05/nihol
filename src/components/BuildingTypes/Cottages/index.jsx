import { CenteredWrapper } from "../../../Generic/Styles";
import { CustomTitle } from "../../../Generic/CustomHelpers";
import { useTranslation } from "react-i18next";

const Cottages = () => {
  const { t } = useTranslation();
  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>
        {t("buildingTypes.cottages")}
      </CustomTitle>
    </CenteredWrapper>
  );
};

export default Cottages;
