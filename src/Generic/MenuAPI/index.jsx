import { Wrapper } from "./style";
import {
  SettingOutlined,
  LogoutOutlined,
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

export const navbarMenuAPI = ({ settingClickHandler, logOutClickHandler }) => {
  const iconGenericStyle = { fontSize: "18px", marginRight: "10px" };
  return [
    {
      label: (
        <Wrapper.MenuItem onClick={settingClickHandler}>
          <SettingOutlined style={iconGenericStyle} />
          <Wrapper.MenuItemText danger={false}>Sozlamalar</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem onClick={logOutClickHandler}>
          <LogoutOutlined style={{ ...iconGenericStyle, color: "red" }} />
          <Wrapper.MenuItemText danger={true}>Tark etish</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];
};

export const bookedUserMenuAPI = ({
  activate,
  observingInDetail,
  editClickHandler,
  deleteClickHandler,
}) => {
  const iconGenericStyle = { fontSize: "18px", marginRight: "10px" };
  return [
    !activate?.disabled && {
      label: (
        <Wrapper.MenuItem onClick={activate?.onClick}>
          <ContactsOutlined style={iconGenericStyle} />
          <Wrapper.MenuItemText danger={false}>
            Faollashtirish
          </Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem onClick={observingInDetail}>
          <FileSearchOutlined style={iconGenericStyle} />
          <Wrapper.MenuItemText danger={false}>
            To'liq ma'lumot
          </Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
    {
      label: (
        <Wrapper.MenuItem onClick={editClickHandler}>
          <EditOutlined style={iconGenericStyle} />
          <Wrapper.MenuItemText danger={false}>
            O'zgartirish
          </Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "2",
    },
    {
      label: (
        <Wrapper.MenuItem onClick={deleteClickHandler}>
          <DeleteOutlined style={{ ...iconGenericStyle, color: "red" }} />
          <Wrapper.MenuItemText danger={true}>O'chirish</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "3",
    },
  ];
};
