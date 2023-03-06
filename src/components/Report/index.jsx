import { Button, Card, Form } from "antd";
import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper } from "../../Generic/Styles";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useDispatch, useSelector } from "react-redux";
import { switchReportOptionsModalVisibility } from "../../redux/modalSlice";
import ReportOptions from "./Options";
import { useState } from "react";

const { RangePicker } = DatePicker;
const returnNumDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

const Report = () => {
  const [loading, setLoading] = useState(false);
  const { selectedOptions } = useSelector((state) => state.report);
  const dispatch = useDispatch();
  const addUser = (e) => {
    setLoading(true);
    let anchor = document.createElement("a");
    document.body.appendChild(anchor);

    fetch(
      `${process.env.REACT_APP_BASE_URL}/report?rangeStart=${new Date(
        new Date(e.dateRange[0].$d).toDateString()
      ).getTime()}&rangeEnd=${new Date(
        new Date(e.dateRange[1].$d).toDateString()
      ).getTime()}&priceInfo=${selectedOptions.includes(
        "priceInfo"
      )}&dateInfo=${selectedOptions.includes("dateInfo")}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.blob())
      .then((blobby) => {
        let objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = `(${returnNumDate(
          e.dateRange[0].$d
        )}) - (${returnNumDate(e.dateRange[1].$d)}).xlsx`;
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
        anchor.remove();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
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
              disabled={loading}
            >
              Выбрать параметры
            </Button>
          </Form.Item>
          <Form.Item
            style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
              loading={loading}
            >
              Скачать
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </CenteredWrapper>
  );
};

export default Report;
