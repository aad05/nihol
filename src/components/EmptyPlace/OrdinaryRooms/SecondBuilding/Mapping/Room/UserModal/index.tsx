import { Modal } from "antd";
import { FC, useState } from "react";
import Editing from "./Editing";
import Observing from "./Observing";
import { Segmented } from "antd";

interface UserModalType {
  open: boolean;
  onCancel: () => any;
  onOk?: () => any;
  clienteData: {};
  openBookModal: () => any;
}

const UserModal: FC<UserModalType> = ({ open, onCancel, clienteData }) => {
  const [type, setType] = useState<"observing" | "editing">("observing");

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={"Информация о пользователе"}
      footer={false}
    >
      <Segmented
        block
        options={["Наблюдение", "Забронированные даты", "Редактирование"]}
        onChange={(e) =>
          e === "Наблюдение" ? setType("observing") : setType("editing")
        }
      />
      {type === "observing" ? (
        <Observing onCancel={onCancel} data={clienteData} />
      ) : (
        <Editing onCancel={onCancel} data={clienteData} />
      )}
    </Modal>
  );
};

export default UserModal;
