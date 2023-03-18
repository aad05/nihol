import { Wrapper } from "./style";
import {
  SettingOutlined,
  LogoutOutlined,
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
  ContactsOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export const useMenuAPI = () => {
  const { t } = useTranslation();
  const navbarMenuAPI = ({
    settingClickHandler,
    logOutClickHandler,
    languageChangeHandler,
  }) => {
    const iconGenericStyle = { fontSize: "18px", marginRight: "10px" };
    return [
      {
        label: (
          <Wrapper.MenuItem onClick={settingClickHandler}>
            <SettingOutlined style={iconGenericStyle} />
            <Wrapper.MenuItemText danger={false}>
              {t("dropdown.navbar_dropdow_setting")}
            </Wrapper.MenuItemText>
          </Wrapper.MenuItem>
        ),
        key: "0",
      },
      {
        label: (
          <Wrapper.MenuItem onClick={languageChangeHandler}>
            <TranslationOutlined style={iconGenericStyle} />
            <Wrapper.MenuItemText danger={false}>
              {t("dropdown.navbar_dropdow_language")}
            </Wrapper.MenuItemText>
          </Wrapper.MenuItem>
        ),
        key: "1",
      },
      {
        label: (
          <Wrapper.MenuItem onClick={logOutClickHandler}>
            <LogoutOutlined style={{ ...iconGenericStyle, color: "red" }} />
            <Wrapper.MenuItemText danger={true}>
              {t("dropdown.navbar_dropdow_logout")}
            </Wrapper.MenuItemText>
          </Wrapper.MenuItem>
        ),
        key: "2",
      },
    ];
  };

  const bookedUserMenuAPI = ({
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
              {t("commonBooking.dropDown.activate")}
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
              {t("commonBooking.dropDown.detailed")}
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
              {t("commonBooking.dropDown.edit")}
            </Wrapper.MenuItemText>
          </Wrapper.MenuItem>
        ),
        key: "2",
      },
      {
        label: (
          <Wrapper.MenuItem onClick={deleteClickHandler}>
            <DeleteOutlined style={{ ...iconGenericStyle, color: "red" }} />
            <Wrapper.MenuItemText danger={true}>
              {t("commonBooking.dropDown.delete")}
            </Wrapper.MenuItemText>
          </Wrapper.MenuItem>
        ),
        key: "3",
      },
    ];
  };

  const buildingDropDown = [
    {
      value: "building-2",
      label: `${t("building.building")} 2`,
      selected: true,
    },
    { value: "building-3", label: `${t("building.building")} 3` },
    { value: "building-4", label: `${t("building.building")} 4` },
    {
      value: "building-5-1",
      label: `${t("building.building")} 5 - 1 ${t("building.floor")}`,
    },
    {
      value: "building-5-2",
      label: `${t("building.building")} 5 - 2 ${t("building.floor")}`,
    },
    {
      value: "building-6-1",
      label: `${t("building.building")} 6 - 1 ${t("building.floor")}`,
    },
    {
      value: "building-6-2",
      label: `${t("building.building")} 6 - 2 ${t("building.floor")}`,
    },
    {
      value: "building-6-3",
      label: `${t("building.building")} 6 - 3 ${t("building.floor")}`,
    },
    { value: "building-cottage", label: `${t("building.cottage")}` },
  ];

  return { navbarMenuAPI, bookedUserMenuAPI, buildingDropDown };
};
