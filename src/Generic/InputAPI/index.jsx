import { useNavigate } from "react-router-dom";

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

export const buildingDetecter = (buildingNumber) => {
  switch (buildingNumber) {
    case "building-2":
      return "Bino 2";
    case "building-3":
      return "Bino 3";
    case "building-4":
      return "Bino 4";
    case "building-5-1":
      return "Bino 5 - 1 qavat";
    case "building-5-2":
      return "Bino 5 - 2 qavat";
    case "building-6-1":
      return "Bino 6 - 1 qavat";
    case "building-6-2":
      return "Bino 6 - 2 qavat";
    case "building-6-3":
      return "Bino 6 - 3 qavat";
    case "building-cottage":
      return "Коттедж";
    default:
      return "";
  }
};

export const useBuildingNavigator = () => {
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

export const reportCheckBoxOptions = [
  {
    label: "Miqdori haqida ma'lumot",
    value: "priceInfo",
  },
  {
    label: "Sana haqida ma'lumot",
    value: "dateInfo",
  },
];

export const allChecked = ["priceInfo", "dateInfo"];
