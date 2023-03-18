import { Checkbox, Col, Divider, Modal, Row } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchReportOptionsModalVisibility } from "../../../redux/modalSlice";
import { setCheckAll, setSelectedOptions } from "../../../redux/reporSlice";

const ReportOptions = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { reportOptionModalVisibility } = useSelector((state) => state.modal);
  const { selectedOptions, indeterminate, checkAll } = useSelector(
    (state) => state.report
  );
  const onChange = (e) => {
    dispatch(setSelectedOptions(e));
  };
  const options = [
    {
      label: t("home.home_report_options_info_amount"),
      value: "priceInfo",
    },
    {
      label: t("home.home_report_options_info_date"),
      value: "dateInfo",
    },
  ];

  return (
    <Modal
      open={reportOptionModalVisibility}
      onCancel={() => dispatch(switchReportOptionsModalVisibility())}
      onOk={() => dispatch(switchReportOptionsModalVisibility())}
      okText={t("modal.modal_save")}
      cancelText={t("modal.modal_canceling")}
      //   footer={false}
      title={t("home.home_report_options")}
    >
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={(e) => {
          dispatch(setCheckAll({ checked: e.target.checked }));
        }}
      >
        {t("home.home_report_options_cancel_all")}
      </Checkbox>
      <Divider />
      <Checkbox.Group
        style={{
          width: "100%",
        }}
        onChange={onChange}
        value={selectedOptions}
      >
        <Row>
          {options.map(({ value, label }) => (
            <Col key={value} span={12}>
              <Checkbox value={value}>{label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Modal>
  );
};

export default ReportOptions;
