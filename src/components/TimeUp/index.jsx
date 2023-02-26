import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper } from "../../Generic/Styles";
import { Spin } from "antd";
import UserTable from "../../Generic/Table";
import useQueryHandler from "../../hooks/useQuery";

const TimeUp = () => {
  const useQuery = useQueryHandler();

  const { isLoading, data } = useQuery({
    queryKey: "time-up-users",
    queryLink: "/users/time-up",
  });

  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>Время окончания</CustomTitle>
      {isLoading ? <Spin /> : <UserTable data={data} />}
    </CenteredWrapper>
  );
};

export default TimeUp;
