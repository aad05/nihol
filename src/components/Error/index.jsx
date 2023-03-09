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
        title="Voy! Nimadir noto'g'ri bajarildi!"
        subTitle="Server to'g'ri ishlamayapti! 
        Internetga ulanishingizni tekshirgandan so'ng, qayta urinib ko'ring va «Yangilash» tugmasini bosing."
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            Yangilash
          </Button>
        }
      />
    </Wrapper>
  );
};

export default Error;
