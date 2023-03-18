import { Wrapper } from "./style";
import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();
  const { errorStatus } = useSelector((state) => state.error);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Result
        status={errorStatus}
        title={t("error.title")}
        subTitle={t("error.subtitle")}
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            {t("error.button")}
          </Button>
        }
      />
    </Wrapper>
  );
};

export default Error;
