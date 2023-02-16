import { useState } from "react";
import { Wrapper } from "./style";
import { useSignOut } from "react-auth-kit";
import { Outlet } from "react-router-dom";
import { Avatar, Dropdown, Modal, MenuProps } from "antd";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const [showProfile, setShowProfile] = useState(false);

  const confirm = () => {
    Modal.confirm({
      title: "Предупреждение",
      content: "Вы действительно хотите выйти ?",
      okText: "Выйти",
      cancelText: "Отмена",
      okButtonProps: {
        style: { background: "red" },
      },
      onOk: () => {
        navigate("/login");
        signOut();
      },
    });
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <Wrapper.MenuItem onClick={() => setShowProfile(true)}>
          <Wrapper.MenuItemText danger={false}>Настройки</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem onClick={() => confirm()}>
          <Wrapper.MenuItemText danger={true}>Выйти</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];

  return (
    <Wrapper>
      {!!showProfile && (
        <ProfileModal
          open={showProfile}
          onCancel={() => setShowProfile(false)}
        />
      )}
      <Wrapper.Container>
        {/* <Wrapper.Logo src={logo} onClick={navigateHandle} /> */}
        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          NIHOL
        </span>
        <Wrapper.ProfileWrapper>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              style={{ background: "#f56a00", cursor: "pointer" }}
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
              }}
            >
              ?
            </Avatar>
          </Dropdown>
        </Wrapper.ProfileWrapper>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
