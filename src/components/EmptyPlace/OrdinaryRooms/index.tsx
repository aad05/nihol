import { Wrapper } from "./style";
import Card from "../../../Generic/Card";
import building from "../../../assets/images/building.svg";
import { useNavigate } from "react-router-dom";
import { CustomTitle } from "../../../Generic/CustomHelpers";
import useNotification from "../../../Generic/notification";

const OrdinaryRooms = () => {
  const notification = useNotification();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>Обычные комнаты</CustomTitle>
      <Wrapper.SectionCardContainer>
        <Card
          title="2 корпус"
          image={building}
          onClick={() => navigate("/empty-places/map/ordinary-rooms/2")}
        />
        <Card
          title="4 корпус"
          image={building}
          // onClick={() => navigate("/empty-places/map/ordinary-rooms/4")}
          onClick={() =>
            notification({
              type: "info",
              message: "На ремонте",
              placement: "topRight",
            })
          }
        />
      </Wrapper.SectionCardContainer>
      <Wrapper.SectionCardContainer>
        <Card
          title="6 корпус"
          image={building}
          // onClick={() => navigate("/empty-places/map/ordinary-rooms/6")}
          onClick={() =>
            notification({
              type: "info",
              message: "На ремонте",
              placement: "topRight",
            })
          }
        />
      </Wrapper.SectionCardContainer>
    </Wrapper>
  );
};

export default OrdinaryRooms;
