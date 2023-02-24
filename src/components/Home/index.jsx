import { Wrapper } from "./style";
import empty_place from "../../assets/images/empty_place.svg";
import start_time from "../../assets/images/start_time.svg";
import half_time from "../../assets/images/half_time.svg";
import time_up from "../../assets/images/end_time.svg";
import report from "../../assets/images/report.svg";
import Card from "../../Generic/Card";
import {
  CenteredWrapper,
  SectionCardContainer,
  Title,
} from "../../Generic/Styles";
import { useNavigate } from "react-router-dom";
import useNotification from "../../hooks/useNotification";

const Home = () => {
  const notification = useNotification();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CenteredWrapper>
        <Title>Департаменты:</Title>
        <SectionCardContainer>
          <Card
            title="Новые поступления"
            image={start_time}
            // onClick={() => navigate("/new-comers")}
            onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
          <Card
            title="Средняя степень"
            image={half_time}
            // onClick={() => navigate("/middle-users")}
            onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
        </SectionCardContainer>
        <SectionCardContainer>
          <Card
            title="Дата окончания срока"
            image={time_up}
            // onClick={() => navigate("/end-users")}
            onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
          <Card
            title="Доступные локации"
            image={empty_place}
            onClick={() => navigate("/building-control")}
          />
        </SectionCardContainer>
        <Title>Отчеты:</Title>
        <SectionCardContainer>
          <Card
            title="Отчет"
            image={report}
            // onClick={() => navigate("/report")}
            onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
        </SectionCardContainer>
      </CenteredWrapper>
    </Wrapper>
  );
};

export default Home;
