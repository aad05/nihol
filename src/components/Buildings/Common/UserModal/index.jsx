import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import Booking from "./Booking";
import Editing from "./Editing";
import Observing from "./Observing";

const UserModal = () => {
  const { t } = useTranslation();
  const [type, setType] = useState("observing");
  const dispatch = useDispatch();
  const { userModalVisibility } = useSelector((state) => state.modal);

  return (
    <Modal
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      title={t("userModal.title")}
      footer={false}
    >
      <Segmented
        block
        options={[
          t("userModal.observing"),
          t("userModal.booking"),
          t("userModal.editing"),
        ]}
        onChange={(e) =>
          e === t("userModal.observing")
            ? setType("observing")
            : e === t("userModal.editing")
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
