import { FC } from "react";
import { Title } from "../Styles";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const CustomTitle: FC<{ children: String; showBackWard: Boolean }> = ({
  children,
  showBackWard,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Title>
        {showBackWard && (
          <LeftOutlined
            style={{ fontSize: "2rem", paddingLeft: "10px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        )}
        {children}
      </Title>
    </>
  );
};
