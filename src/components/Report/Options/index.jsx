import { Checkbox, Col, Divider, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchReportOptionsModalVisibility } from "../../../redux/modalSlice";
import { setCheckAll, setSelectedOptions } from "../../../redux/reporSlice";

const ReportOptions = () => {
  const dispatch = useDispatch();
  const { reportOptionModalVisibility } = useSelector((state) => state.modal);
  const { selectedOptions, indeterminate, checkAll, options } = useSelector(
    (state) => state.report
  );
  const onChange = (e) => {
    dispatch(setSelectedOptions(e));
  };

  return (
    <Modal
      open={reportOptionModalVisibility}
      onCancel={() => dispatch(switchReportOptionsModalVisibility())}
      onOk={() => dispatch(switchReportOptionsModalVisibility())}
      okText="Сохранять"
      cancelText="Отмена"
      //   footer={false}
      title="Параметры отчета"
    >
      <Checkbox
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={(e) => {
          dispatch(setCheckAll({ checked: e.target.checked }));
        }}
      >
        Отметить все
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
            <Col key={value} span={10}>
              <Checkbox value={value}>{label}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Modal>
  );
};

export default ReportOptions;
