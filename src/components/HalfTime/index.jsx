import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper } from "../../Generic/Styles";
import useQueryHandler from "../../hooks/useQuery";
import { Spin } from "antd";
import UserTable from "../../Generic/Table";

const HalfTime = () => {
  const useQuery = useQueryHandler();

  const { isLoading, data } = useQuery({
    queryKey: "half-time-users",
    queryLink: "/users/half-time",
  });

  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>Средняя степень</CustomTitle>
      {isLoading ? <Spin /> : <UserTable data={data} />}
    </CenteredWrapper>
  );
};

export default HalfTime;
