import { Button, Card, Form } from "antd";
import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper } from "../../Generic/Styles";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useDispatch, useSelector } from "react-redux";
import { switchReportOptionsModalVisibility } from "../../redux/modalSlice";
import ReportOptions from "./Options";

const { RangePicker } = DatePicker;

const Report = () => {
  const { selectedOptions } = useSelector((state) => state.report);
  const dispatch = useDispatch();
  const addUser = (e) => {
    console.log({
      rangeStart: new Date(
        new Date(e.dateRange[0].$d).toDateString()
      ).getTime(),
      rangeEnd: new Date(new Date(e.dateRange[1].$d).toDateString()).getTime(),
      options: selectedOptions,
    });
  };

  return (
    <CenteredWrapper>
      <ReportOptions />
      <CustomTitle showBackWard={true}>Отчет</CustomTitle>
      <Card size="small">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={(e) => addUser(e)}
          autoComplete="off"
        >
          <Form.Item
            label="Диапазон дат"
            name="dateRange"
            rules={[
              {
                required: true,
                message: "Пожалуйста, выберите диапазон дат!",
              },
            ]}
          >
            <RangePicker locale={locale} />
          </Form.Item>
          <Form.Item label="Параметры" name="options">
            <Button
              type="primary"
              onClick={() => dispatch(switchReportOptionsModalVisibility())}
            >
              Выбрать параметры
            </Button>
          </Form.Item>
          <Form.Item
            style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
          >
            <Button type="primary" htmlType="submit">
              Скачать
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </CenteredWrapper>
  );
};

export default Report;
