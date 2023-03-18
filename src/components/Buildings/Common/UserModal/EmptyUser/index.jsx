import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";

const EmptyUser = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Result
      status="404"
      subTitle={t("emptyRoom.subTitle")}
      extra={
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              switchAddUserModalVisibility({ loading: false, open: true })
            )
          }
        >
          {t("emptyRoom.button")}
        </Button>
      }
    />
  );
};

export default EmptyUser;
