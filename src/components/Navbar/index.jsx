import { Wrapper } from "./style";
import { useSignOut } from "react-auth-kit";
import { Outlet } from "react-router-dom";
import { Avatar, Dropdown, Modal } from "antd";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import { useMenuAPI } from "../../Generic/MenuAPI";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../redux/navbarSlice";
import LocaleModal from "./LocaleModal";
import { switchLocaleModalVisibility } from "../../redux/modalSlice";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const { navbarMenuAPI } = useMenuAPI();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = useSignOut();

  const confirm = () => {
    Modal.confirm({
      title: t("homeLogOutWarning.title"),
      content: t("homeLogOutWarning.content"),
      okText: t("modal.modal_logout"),
      cancelText: t("modal.modal_canceling"),
      okButtonProps: {
        style: { background: "red" },
      },
      onOk: () => {
        navigate("/login");
        signOut();
      },
    });
  };

  return (
    <Wrapper>
      <LocaleModal />
      <ProfileModal />
      <Wrapper.Container>
        {/* <Wrapper.Logo src={logo} onClick={navigateHandle} /> */}
        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          NIHOL
        </span>
        <Wrapper.ProfileWrapper>
          <Dropdown
            menu={{
              items: navbarMenuAPI({
                settingClickHandler: () =>
                  dispatch(switchUserModalVisibility()),
                logOutClickHandler: () => confirm(),
                languageChangeHandler: () =>
                  dispatch(switchLocaleModalVisibility()),
              }),
            }}
            trigger={["click"]}
          >
            <Avatar
              style={{ background: "#f56a00", cursor: "pointer" }}
              size={{
                xs: 24,
                sm: 32,
                md: 40,
              }}
            >
              A
            </Avatar>
          </Dropdown>
        </Wrapper.ProfileWrapper>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
