import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper } from "../../Generic/Styles";
import { Spin } from "antd";
import UserTable from "../../Generic/Table";
import useQueryHandler from "../../hooks/useQuery";
import { useTranslation } from "react-i18next";

const TimeUp = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();

  const { isLoading, data } = useQuery({
    queryKey: "time-up-users",
    queryLink: "/users/time-up",
  });

  return (
    <CenteredWrapper>
      <CustomTitle showBackWard={true}>
        {t("home.home_up_users_section")}
      </CustomTitle>
      {isLoading ? <Spin /> : <UserTable data={data} />}
    </CenteredWrapper>
  );
};

export default TimeUp;
