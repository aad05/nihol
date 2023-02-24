import { Card, Descriptions, Dropdown } from "antd";
import useQueryHandler from "../../../../../../hooks/useQuery";
import { EllipsisOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteBookedUser } from "../../../../../../hooks/useQuery/useBuildingActions";
import { bookedUserMenuAPI } from "../../../../../../Generic/MenuAPI";
import {
  switchBookedUserDetailedModalVisibility,
  switchUpdateBookingModalVisibility,
} from "../../../../../../redux/modalSlice";
import { setSelectedBookedData } from "../../../../../../redux/userSlice";
import { IconCircleWrapper } from "../../../../../../Generic/Styles";

const BookedUser = ({ idCollection }) => {
  const { selectedUserData } = useSelector((state) => state.user);
  const { mutate: deleteMutate } = useDeleteBookedUser();
  const dispatch = useDispatch();
  const rtl = new Intl.DateTimeFormat();
  const useQuery = useQueryHandler();

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/${selectedUserData?.mutationBuildingNumber}/booked-user?_id=${idCollection?._id}`,
    queryKey: `booked-user/${idCollection?._id}`,
    method: "GET",
  });

  return (
    <Card
      style={{
        width: "100%",
        marginTop: 16,
      }}
      loading={isLoading}
    >
      <Descriptions
        title={data?.fullName}
        column={2}
        size="small"
        extra={
          <Dropdown
            trigger={["click"]}
            menu={{
              items: bookedUserMenuAPI({
                observingInDetail: () => {
                  dispatch(switchBookedUserDetailedModalVisibility());
                  dispatch(setSelectedBookedData(data));
                },
                editClickHandler: () => {
                  dispatch(switchUpdateBookingModalVisibility());
                  dispatch(setSelectedBookedData(data));
                },
                deleteClickHandler: () => {
                  console.log("deleting");
                  deleteMutate(data);
                },
              }),
            }}
          >
            <IconCircleWrapper>
              <EllipsisOutlined />
            </IconCircleWrapper>
          </Dropdown>
        }
        layout="vertical"
      >
        <Descriptions.Item label="Дата начала">
          {rtl?.format(data?.arrivalDate)}
        </Descriptions.Item>
        <Descriptions.Item label="Дата окончания">
          {rtl?.format(data?.endDate)}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BookedUser;
