import { Button, Modal, Segmented } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchMovingModalVisibility } from "../../../../redux/modalSlice";
import SecondMoveBuilding from "./Buildings/SecondMoveBuilding";
import ThirdMoveBuilding from "./Buildings/ThirdMoveBuilding";
import FourthMoveBuilding from "./Buildings/FourthMoveBuilding";
import FifthMoveBuilding from "./Buildings/FifthMoveBuilding";
import SixthMoveBuilding from "./Buildings/SixthMoveBuilding";
import { useTranslation } from "react-i18next";

const Moving = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { movingModalVisibility } = useSelector((state) => state.modal);
  const { movingUserData } = useSelector((state) => state.user);
  const [selectedMoveBuilding, setSelectedMoveBuilding] = useState(
    movingUserData?.mutationBuildingNumber.slice(0, 1)
  );

  return (
    <Modal
      title={t("moveModal.title")}
      open={movingModalVisibility.open}
      cancelText={t("modal.modal_canceling")}
      onCancel={() => {
        if (!movingModalVisibility.loading)
          return dispatch(switchMovingModalVisibility());
        else return false;
      }}
      footer={
        <Button
          danger
          onClick={() => dispatch(switchMovingModalVisibility())}
          loading={movingModalVisibility.loading}
        >
          {t("modal.modal_canceling")}
        </Button>
      }
    >
      <Segmented
        block
        options={["2", "3", "4", "5", "6"]}
        value={selectedMoveBuilding}
        onChange={(e) => {
          setSelectedMoveBuilding(e);
        }}
      />
      {selectedMoveBuilding === "2" && <SecondMoveBuilding />}
      {selectedMoveBuilding === "3" && <ThirdMoveBuilding />}
      {selectedMoveBuilding === "4" && <FourthMoveBuilding />}
      {selectedMoveBuilding === "5" && <FifthMoveBuilding />}
      {selectedMoveBuilding === "6" && <SixthMoveBuilding />}
    </Modal>
  );
};

export default Moving;
