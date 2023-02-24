import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import Booking from "./Booking";
import Editing from "./Editing";
import Observing from "./Observing";

const UserModal = () => {
  const [type, setType] = useState("observing");
  const dispatch = useDispatch();
  const { userModalVisibility } = useSelector((state) => state.modal);

  return (
    <Modal
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      title={"Информация о пользователе"}
      footer={false}
    >
      <Segmented
        block
        options={["Наблюдение", "Забронированные даты", "Редактирование"]}
        onChange={(e) =>
          e === "Наблюдение"
            ? setType("observing")
            : e === "Редактирование"
            ? setType("editing")
            : setType("booking")
        }
      />
      {type === "observing" ? (
        <Observing />
      ) : type === "editing" ? (
        <Editing />
      ) : (
        <Booking />
      )}
    </Modal>
  );
};

export default UserModal;
