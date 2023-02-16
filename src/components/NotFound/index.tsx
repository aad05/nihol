import { Button, Result } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
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
        subTitle="Извините, страница, которую вы посетили, не существует."
        extra={
          <Button onClick={() => navigate("/")} type="primary">
            Домой
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
