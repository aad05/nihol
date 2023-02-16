import Card from "../../Generic/Card";
import { Wrapper } from "./style";
import ordinary_room from "../../assets/images/ordinary_room.svg";
import luxury_room from "../../assets/images/luxury_room.svg";
import mansion from "../../assets/images/mansion.svg";
import { useNavigate, Outlet, useOutlet } from "react-router-dom";
import { CustomTitle } from "../../Generic/CustomHelpers";
import useNotification from "../../Generic/notification";

const EmptyPlace = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  const notification = useNotification();
  return (
    <Wrapper>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <CustomTitle showBackWard={true}>Пустые места</CustomTitle>
          <Wrapper.SectionCardContainer>
            <Card
              title="Обычные комнаты"
              image={ordinary_room}
              onClick={() => navigate("/empty-places/ordinary-rooms")}
            />
            <Card
              title="Роскошные комнаты"
              image={luxury_room}
              // onClick={() => navigate("/empty-places/luxury-rooms")}
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
              title="Коттеджи"
              image={mansion}
              // onClick={() => navigate("/empty-places/cottage-rooms")}
              onClick={() =>
                notification({
                  type: "info",
                  message: "На ремонте",
                  placement: "topRight",
                })
              }
            />
          </Wrapper.SectionCardContainer>
        </>
      )}
    </Wrapper>
  );
};

export default EmptyPlace;
