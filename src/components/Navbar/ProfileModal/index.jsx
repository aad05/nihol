import { Modal, Input, Typography } from "antd";
import { CenteredWrapper } from "../../../Generic/Styles";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../redux/navbarSlice";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

const ProfileModal = () => {
  const { t } = useTranslation();
  const { profileModalVisibility, userData } = useSelector(
    (state) => state.navbar
  );
  const dispatch = useDispatch();

  return (
    <Modal
      open={profileModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      title={t("navbarProfileModal.title")}
      okText={t("modal.modal_save")}
      cancelText={t("modal.modal_canceling")}
      okButtonProps={{
        disabled: true,
      }}
    >
      <CenteredWrapper>
        <Wrapper.Avatar>S</Wrapper.Avatar>
        <Wrapper.Form>
          <Wrapper.InputWrapper>
            <Wrapper.Label>{t("navbarProfileModal.name")}:</Wrapper.Label>
            <Input disabled={true} value={userData?.name} />
          </Wrapper.InputWrapper>
          <Wrapper.InputWrapper>
            <Wrapper.Label>{t("navbarProfileModal.surname")}:</Wrapper.Label>
            <Input disabled={true} value={userData?.surname} />
          </Wrapper.InputWrapper>
        </Wrapper.Form>
        <Text style={{ marginTop: 20 }} type="secondary">
          Nihol 0.0.1 version
        </Text>
      </CenteredWrapper>
    </Modal>
  );
};

export default ProfileModal;
