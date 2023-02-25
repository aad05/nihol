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
      return "Здание 2";
    case "building-3":
      return "Здание 3";
    case "building-4":
      return "Здание 4";
    case "building-5-1":
      return "Здание 5 - 1 этаж";
    case "building-5-2":
      return "Здание 5 - 2 этаж";
    case "building-6-1":
      return "Здание 6 - 1 этаж";
    case "building-6-2":
      return "Здание 6 - 2 этаж";
    case "building-6-3":
      return "Здание 6 - 3 этаж";
    case "building-cottage":
      return "Коттедж";
    default:
      return "";
  }
};
