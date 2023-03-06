import { notification } from "antd";

const useNotification = () => (notifyData) => {
  return notification[notifyData.type]({
    ...notifyData,
    placement: notifyData.placement || "topRight",
  });
};

export default useNotification;
