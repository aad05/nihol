import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";
import RegularUser from "./RegularUser";
import VoucherUser from "./VoucherUser";

const AddModal = () => {
  const [type, setType] = useState("regular");
  const dispatch = useDispatch();
  const { userAddModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      mask={true}
      title="Добавить нового пользователя"
      open={userAddModalVisibility.open}
      onCancel={() =>
        userAddModalVisibility.loading
          ? false
          : dispatch(
              switchAddUserModalVisibility({ loading: false, open: false })
            )
      }
      footer={false}
    >
      <Segmented
        block
        options={["Обычный", "Путевка"]}
        onChange={(e) =>
          e === "Обычный" ? setType("regular") : setType("voucher")
        }
      />
      {type === "regular" ? <RegularUser /> : <VoucherUser />}
    </Modal>
  );
};

export default AddModal;
