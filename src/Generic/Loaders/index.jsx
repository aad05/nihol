import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./style";

export const MovingBuildingLoader = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Spin />
      <Wrapper.Title>{t("loaders.loading")}...</Wrapper.Title>
    </Wrapper>
  );
};
