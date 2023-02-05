import Card from "../../Generic/Card";
import { Title } from "../../Generic/Styles";
import { Wrapper } from "./style";
import ordinary_room from "../../assets/images/ordinary_room.svg";
import luxury_room from "../../assets/images/luxury_room.svg";
import mansion from "../../assets/images/mansion.svg";

const EmptyPlace = () => {
  return (
    <Wrapper>
      <Title>Пустые места</Title>
      <Wrapper.SectionCardContainer>
        <Card title="Обычные комнаты" image={ordinary_room} />
        <Card title="Роскошные комнаты" image={luxury_room} />
      </Wrapper.SectionCardContainer>
      <Wrapper.SectionCardContainer>
        <Card title="Коттеджи" image={mansion} />
      </Wrapper.SectionCardContainer>
    </Wrapper>
  );
};

export default EmptyPlace;
