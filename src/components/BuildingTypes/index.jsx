import { useNavigate, Outlet, useOutlet } from "react-router-dom";
import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper, SectionCardContainer } from "../../Generic/Styles";
import Card from "../../Generic/Card";
import ordinary_room from "../../assets/images/ordinary_room.svg";
import luxury_room from "../../assets/images/luxury_room.svg";
import mansion from "../../assets/images/mansion.svg";
import useNotification from "../../hooks/useNotification";

const EmptyPlace = () => {
  const notification = useNotification();
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <CenteredWrapper>
      {!!hasOutlet && <Outlet />}
      {!hasOutlet && (
        <>
          <CustomTitle showBackWard={true}>Пустые места</CustomTitle>
          <SectionCardContainer>
            <Card
              title="Обычные комнаты"
              image={ordinary_room}
              onClick={() => navigate("/building-control/ordinary-rooms")}
            />
            <Card
              title="Роскошные комнаты"
              image={luxury_room}
              onClick={() => navigate("/building-control/luxury-rooms")}
            />
          </SectionCardContainer>
          <SectionCardContainer>
            <Card
              title="Коттеджи"
              image={mansion}
              // onClick={() => navigate("/building-control/cottage-rooms")}
              onClick={() =>
                notification({ type: "info", message: "В ремонте" })
              }
            />
          </SectionCardContainer>
        </>
      )}
    </CenteredWrapper>
  );
};

export default EmptyPlace;
