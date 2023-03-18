import { useNavigate, Outlet, useOutlet } from "react-router-dom";
import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper, SectionCardContainer } from "../../Generic/Styles";
import Card from "../../Generic/Card";
import ordinary_room from "../../assets/images/ordinary_room.svg";
import luxury_room from "../../assets/images/luxury_room.svg";
import mansion from "../../assets/images/mansion.svg";
import { useTranslation } from "react-i18next";

const EmptyPlace = () => {
  const { t } = useTranslation();
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <CenteredWrapper>
      {!!hasOutlet && <Outlet />}
      {!hasOutlet && (
        <>
          <CustomTitle showBackWard={true}>
            {t("buildingTypes.title")}
          </CustomTitle>
          <SectionCardContainer>
            <Card
              title={t("buildingTypes.ordinaryRooms")}
              image={ordinary_room}
              onClick={() => navigate("/building-control/ordinary-rooms")}
            />
            <Card
              title={t("buildingTypes.luxuryRooms")}
              image={luxury_room}
              onClick={() => navigate("/building-control/luxury-rooms")}
            />
          </SectionCardContainer>
          <SectionCardContainer>
            <Card
              title={t("buildingTypes.cottages")}
              image={mansion}
              onClick={() => navigate("/building-control/map/cottage")}
            />
          </SectionCardContainer>
        </>
      )}
    </CenteredWrapper>
  );
};

export default EmptyPlace;
