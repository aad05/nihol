// import { useTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import i18n from "i18next";

export const phoneNumberFormatter = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // Indentifying of the SIM card that belongs to which company
  if (phoneNumberLength < 3) return phoneNumber;

  // Separating company's beginner code e.x (99) || (97) || (94) ...
  if (phoneNumberLength < 5)
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;

  // Separating first trinity number ... - 532 || ... - 777
  if (phoneNumberLength < 7)
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
      2,
      5
    )} - ${phoneNumber.slice(5, 7)}`;

  // Separating second and third doubled number ... - 10 - 25 || ... - 15 - 65
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    5
  )} - ${phoneNumber.slice(5, 7)} - ${phoneNumber.slice(7, 9)}`;
};

export const useInput = () => {
  const { t } = useTranslation();
  const buildingDetecter = (buildingNumber) => {
    switch (buildingNumber) {
      case "building-2":
        return `${t("building.building")} 2`;
      case "building-3":
        return `${t("building.building")} 3`;
      case "building-4":
        return `${t("building.building")} 4`;
      case "building-5-1":
        return `${t("building.building")} 5 - 1 ${t("building.floor")}`;
      case "building-5-2":
        return `${t("building.building")} 5 - 2 ${t("building.floor")}`;
      case "building-6-1":
        return `${t("building.building")} 6 - 1 ${t("building.floor")}`;
      case "building-6-2":
        return `${t("building.building")} 6 - 2 ${t("building.floor")}`;
      case "building-6-3":
        return `${t("building.building")} 6 - 3 ${t("building.floor")}`;
      case "building-cottage":
        return `${t("building.cottage")}`;
      default:
        return "";
    }
  };

  const useBuildingNavigator = () => {
    const navigate = useNavigate();
    return (buildingNumber) => {
      switch (buildingNumber) {
        case "building-2":
          return navigate("/building-control/map/ordinary-rooms/2");
        case "building-3":
          return navigate("/building-control/map/luxury-rooms/3");
        case "building-4":
          return navigate("/building-control/map/ordinary-rooms/4");
        case "building-5-1":
          return navigate("/building-control/map/luxury-rooms/5");
        case "building-5-2":
          return navigate("/building-control/map/luxury-rooms/5");
        case "building-6-1":
          return navigate("/building-control/map/ordinary-rooms/6");
        case "building-6-2":
          return navigate("/building-control/map/ordinary-rooms/6");
        case "building-6-3":
          return navigate("/building-control/map/ordinary-rooms/6");
        case "building-cottage":
          return navigate("/building-control/map/cottage");
        default:
          return "";
      }
    };
  };

  return {
    buildingDetecter,
    useBuildingNavigator,
    allChecked,
  };
};

export const allChecked = ["priceInfo", "dateInfo"];
