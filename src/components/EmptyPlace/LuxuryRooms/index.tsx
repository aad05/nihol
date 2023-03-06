import { Wrapper } from "./style";
import Card from "../../../Generic/Card";
import building from "../../../assets/images/building.svg";
import { CustomTitle } from "../../../Generic/CustomHelpers";

const LuxuryRooms = () => {
  return (
    <Wrapper>
      <CustomTitle showBackWard={true}>Роскошные комнаты</CustomTitle>
      <Wrapper.SectionCardContainer>
        <Card title="3 корпус" image={building} />
        <Card title="5 корпус" image={building} />
      </Wrapper.SectionCardContainer>
    </Wrapper>
  );
};

export default LuxuryRooms;
