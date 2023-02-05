import { FC } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import empty_place from "../../assets/images/empty_place.svg";
import start_time from "../../assets/images/start_time.svg";
import half_time from "../../assets/images/half_time.svg";
import time_up from "../../assets/images/end_time.svg";
import report from "../../assets/images/report.svg";
import Card from "../../Generic/Card";
import { Title } from "../../Generic/Styles";

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Container>
        <Title>Департаменты:</Title>
        <Wrapper.SectionCardContainer>
          <Card
            title="Новые поступления"
            image={start_time}
            onClick={() => navigate("/new-comers")}
          />
          <Card
            title="Средняя степень"
            image={half_time}
            onClick={() => navigate("/middle-users")}
          />
        </Wrapper.SectionCardContainer>
        <Wrapper.SectionCardContainer>
          <Card
            title="Дата окончания срока"
            image={time_up}
            onClick={() => navigate("/end-users")}
          />
          <Card
            title="Доступные локации"
            image={empty_place}
            onClick={() => navigate("/empty-places")}
          />
        </Wrapper.SectionCardContainer>
        <Title>Отчеты:</Title>
        <Wrapper.SectionCardContainer>
          <Card
            title="Отчет"
            image={report}
            onClick={() => navigate("/report")}
          />
        </Wrapper.SectionCardContainer>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Home;
