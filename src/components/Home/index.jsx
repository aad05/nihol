import { Wrapper } from "./style";
import empty_place from "../../assets/images/empty_place.svg";
import all_users from "../../assets/images/all_users.svg";
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

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CenteredWrapper>
        <Title>Bo'limlar:</Title>
        <SectionCardContainer>
          <Card
            title="Barcha mujozlar"
            image={all_users}
            onClick={() => navigate("/all-users")}
            // onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
          <Card
            title="Oraliq muddat."
            image={half_time}
            onClick={() => navigate("/middle-users")}
            // onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
        </SectionCardContainer>
        <SectionCardContainer>
          <Card
            title="Muddat tugash."
            image={time_up}
            onClick={() => navigate("/end-users")}
            // onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
          <Card
            title="Mavjud joylar"
            image={empty_place}
            onClick={() => navigate("/building-control")}
          />
        </SectionCardContainer>
        <Title>Hisbotlar:</Title>
        <SectionCardContainer>
          <Card
            title="Hisobot"
            image={report}
            onClick={() => navigate("/report")}
            // onClick={() => notification({ type: "info", message: "В ремонте" })}
          />
        </SectionCardContainer>
      </CenteredWrapper>
    </Wrapper>
  );
};

export default Home;
