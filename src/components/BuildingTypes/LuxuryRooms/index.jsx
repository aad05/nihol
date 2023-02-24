import Card from "../../../Generic/Card";
import building from "../../../assets/images/building.svg";
import { CustomTitle } from "../../../Generic/CustomHelpers";
import { CenteredWrapper, SectionCardContainer } from "../../../Generic/Styles";
import { useNavigate } from "react-router-dom";

const LuxuryRooms = () => {
  const navigate = useNavigate();
  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>Роскошные комнаты</CustomTitle>
      <SectionCardContainer>
        <Card
          title="3 корпус"
          image={building}
          onClick={() => navigate("/building-control/map/luxury-rooms/3")}
        />
        <Card
          title="5 корпус"
          image={building}
          onClick={() => navigate("/building-control/map/luxury-rooms/5")}
        />
      </SectionCardContainer>
    </CenteredWrapper>
  );
};
export default LuxuryRooms;
