import { Modal, Input, Typography } from "antd";
import { CenteredWrapper } from "../../../Generic/Styles";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../redux/navbarSlice";

const { Text } = Typography;

const ProfileModal = () => {
  const { profileModalVisibility, userData } = useSelector(
    (state) => state.navbar
  );
  const dispatch = useDispatch();

  return (
    <Modal
      open={profileModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      title="Профиль"
      okText="Сохранять"
      okButtonProps={{
        disabled: true,
      }}
    >
      <CenteredWrapper>
        <Wrapper.Avatar>S</Wrapper.Avatar>
        <Wrapper.Form>
          <Wrapper.InputWrapper>
            <Wrapper.Label>Имя:</Wrapper.Label>
            <Input disabled={true} value={userData?.name} />
          </Wrapper.InputWrapper>
          <Wrapper.InputWrapper>
            <Wrapper.Label>Фамилия:</Wrapper.Label>
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
