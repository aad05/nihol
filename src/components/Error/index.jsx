import { Wrapper } from "./style";
import { Button, Result } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const { errorStatus } = useSelector((state) => state.error);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Result
        status={errorStatus}
        title="Упс! Что-то пошло не так!"
        subTitle="Сервер работает некорректно!
        Пожалуйста, повторите попытку после проверки подключения к Интернету и нажмите кнопку «Обновить»."
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            Обновить
          </Button>
        }
      />
    </Wrapper>
  );
};

export default Error;
