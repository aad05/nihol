import { Button, Card, Form, Statistic } from "antd";
import { CustomTitle } from "../../Generic/CustomHelpers";
import { CenteredWrapper, Title } from "../../Generic/Styles";
import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/ru_RU";
import { useDispatch, useSelector } from "react-redux";
import { switchReportOptionsModalVisibility } from "../../redux/modalSlice";
import ReportOptions from "./Options";
import { useState } from "react";
import useQueryHandler from "../../hooks/useQuery";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

const { RangePicker } = DatePicker;
const returnNumDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

const Report = () => {
  const { t } = useTranslation();
  const useQuery = useQueryHandler();
  const [loading, setLoading] = useState(false);
  const { selectedOptions } = useSelector((state) => state.report);
  const dispatch = useDispatch();

  const { isLoading, data } = useQuery({
    queryKey: "users-statistics",
    queryLink: "/statistics",
  });

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
      <CustomTitle showBackWard={true}>{t("home.home_report")}</CustomTitle>
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
            label={t("home.home_report_range_picker")}
            name="dateRange"
            rules={[
              {
                required: true,
                message: t("formErrors.datapicker_error"),
              },
            ]}
          >
            <RangePicker
              locale={locale}
              defaultValue={dayjs("", "DD.MM.YYYY")}
              format={"DD.MM.YYYY"}
            />
          </Form.Item>
          <Form.Item label={t("home.home_report_parameters")} name="options">
            <Button
              type="primary"
              onClick={() => dispatch(switchReportOptionsModalVisibility())}
              disabled={loading}
            >
              {t("home.home_report_parameters_select")}
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
              {t("home.home_report_download")}
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Title>{t("home.home_report_statistics")}</Title>
      <Card bordered={false} style={{ margin: "0 0 50px 0" }}>
        <Card bordered={false}>
          <Statistic
            title={t("home.home_report_all_users_count")}
            value={isLoading ? "..." : data.allUsers}
          />
        </Card>
        <Card bordered={false} style={{ margin: "10px 0" }}>
          <Statistic
            title={t("home.home_report_all_books_count")}
            value={isLoading ? "..." : data.allBookedUsers}
          />
        </Card>
        <Card bordered={false} style={{ margin: "10px 0" }}>
          <Statistic
            title={t("home.home_report_all_empty_places_count")}
            value={isLoading ? "..." : data?.allFreeRooms}
          />
        </Card>
      </Card>
    </CenteredWrapper>
  );
};

export default Report;
