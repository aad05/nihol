import { Title } from "../Styles";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const CustomTitle = ({ children, showBackWard }) => {
  const navigate = useNavigate();

  return (
    <Title mt={true}>
      {showBackWard && (
        <LeftOutlined
          style={{ fontSize: "2rem", paddingLeft: "10px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
      )}
      {children}
    </Title>
  );
};
