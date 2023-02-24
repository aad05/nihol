import useNotification from "../../hooks/useNotification";

export const loginEmptyError = {
  type: "error",
  message: "Пожалуйста заполните все поля!",
};

export const loginPasswordLengthError = {
  type: "error",
  message: "Длина пароля должна быть в диапазоне от 6 до 8.",
};

export const response404Error = {
  type: "error",
  message: "К сожалению, что-то не так с URL-адресом API !!!",
};

export const response400Error = {
  type: "error",
  message: "К сожалению, чего-то недостаточно для получения ответа сервера",
};

export const response409Error = {
  type: "error",
  message: "Неверный пароль или номер телефона",
};

export const useResponseErrorChecker = () => {
  const notification = useNotification();
  return (res) => {
    const { response } = res;
    switch (response.status) {
      case 404:
        return notification(response404Error);
      case 400:
        return notification(response400Error);
      case 409:
        return notification(response409Error);
      default:
        return;
    }
  };
};
