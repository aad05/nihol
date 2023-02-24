import Card from "../../../Generic/Card";
import building from "../../../assets/images/building.svg";
import { useNavigate } from "react-router-dom";
import { CustomTitle } from "../../../Generic/CustomHelpers";
import { CenteredWrapper, SectionCardContainer } from "../../../Generic/Styles";

const OrdinaryRooms = () => {
  const navigate = useNavigate();
  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>Обычные комнаты</CustomTitle>
      <SectionCardContainer>
        <Card
          title="2 корпус"
          image={building}
          onClick={() => navigate("/building-control/map/ordinary-rooms/2")}
        />
        <Card
          title="4 корпус"
          image={building}
          onClick={() => navigate("/building-control/map/ordinary-rooms/4")}
        />
      </SectionCardContainer>
      <SectionCardContainer>
        <Card
          title="6 корпус"
          image={building}
          // onClick={() => notification({ type: "info", message: "В ремонте" })}
          onClick={() => navigate("/building-control/map/ordinary-rooms/6")}
        />
      </SectionCardContainer>
    </CenteredWrapper>
  );
};

export default OrdinaryRooms;
