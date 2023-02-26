import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper } from "../../Generic/Styles";
import useQueryHandler from "../../hooks/useQuery";
import { Spin } from "antd";
import UserTable from "../../Generic/Table";

const NewComers = () => {
  const useQuery = useQueryHandler();

  const { isLoading, data } = useQuery({
    queryKey: "new-comers",
    queryLink: "/users/new-comers",
  });
  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>Новое поступление</CustomTitle>
      {isLoading ? <Spin /> : <UserTable data={data} />}
    </CenteredWrapper>
  );
};

export default NewComers;
