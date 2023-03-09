import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Kechirasz, siz tashrif buyurgan sayt mavjud emas."
        extra={
          <Button onClick={() => navigate("/")} type="primary">
            Asosiy bo'lim
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
