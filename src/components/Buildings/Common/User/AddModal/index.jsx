import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";
import RegularUser from "./RegularUser";
import VoucherUser from "./VoucherUser";

const AddModal = () => {
  const { t } = useTranslation();
  const [type, setType] = useState("regular");
  const dispatch = useDispatch();
  const { userAddModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      mask={true}
      title={t("commonUser.addModal.title")}
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
        defaultValue={t("commonUser.addModal.ordinary")}
        block
        options={[
          t("commonUser.addModal.ordinary"),
          t("commonUser.addModal.voucher"),
        ]}
        onChange={(e) =>
          e === t("commonUser.addModal.ordinary")
            ? setType("regular")
            : setType("voucher")
        }
      />
      {type === "regular" ? <RegularUser /> : <VoucherUser />}
    </Modal>
  );
};

export default AddModal;
