import Card from "../../../Generic/Card";
import building from "../../../assets/images/building.svg";
import { CustomTitle } from "../../../Generic/CustomHelpers";
import { CenteredWrapper, SectionCardContainer } from "../../../Generic/Styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LuxuryRooms = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>
        {t("buildingTypes.luxuryRooms")}
      </CustomTitle>
      <SectionCardContainer>
        <Card
          title={`3 ${t("building.building")}`}
          image={building}
          onClick={() => navigate("/building-control/map/luxury-rooms/3")}
        />
        <Card
          title={`5 ${t("building.building")}`}
          image={building}
          onClick={() => navigate("/building-control/map/luxury-rooms/5")}
        />
      </SectionCardContainer>
    </CenteredWrapper>
  );
};
export default LuxuryRooms;
