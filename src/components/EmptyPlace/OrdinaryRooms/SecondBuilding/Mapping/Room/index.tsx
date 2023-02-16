import { FC, useState } from "react";
import { Button, Modal, Tooltip } from "antd";
import { Wrapper } from "../style";
import UserModal from "./UserModal";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import AddModal from "./AddModal";
import useQueryHandler from "../../../../../../hooks/useQuery";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { ConfirmMomdalButtonWrapper } from "./style";
import BookModal from "./BookModal";
const { confirm } = Modal;

interface RoomType {
  clienteInfo?: {
    isBooked?: Boolean;
    userID?: String;
  };
  onClick?: () => any;
}

const Room: FC<RoomType> = ({ clienteInfo, onClick }) => {
  const useQuery = useQueryHandler();
  const [open, setOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);

  const onClickHandler = () => {
    onClick?.();
    if (!clienteInfo?.userID) {
      return confirm({
        title: "Пустое место",
        icon: <ExclamationCircleOutlined />,
        content: clienteInfo?.isBooked
          ? "Это место пусто. Нажмите «Добавить», чтобы добавить нового пользователя."
          : "Это место пусто. Нажмите «Добавить», чтобы добавить нового пользователя. Или нажмите «Забронировать», чтобы забронировать это место.",
        closable: true,
        footer: (
          <ConfirmMomdalButtonWrapper>
            {!clienteInfo?.isBooked && (
              <Button
                onClick={() => {
                  setBookModalOpen(true);
                  Modal?.destroyAll();
                }}
              >
                Забронировать
              </Button>
            )}
            <Button
              onClick={() => {
                setAddModalOpen(true);
                Modal?.destroyAll();
              }}
              type="primary"
            >
              Добавить
            </Button>
          </ConfirmMomdalButtonWrapper>
        ),
      });
    }

    setOpen(true);
  };

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/2/user?_id=${clienteInfo?.userID}`,
    queryKey: `user/${clienteInfo?.userID}`,
    method: "GET",
  });

  return (
    <>
      {addModalOpen && (
        <AddModal open={addModalOpen} onCancel={() => setAddModalOpen(false)} />
      )}
      {bookModalOpen && (
        <BookModal
          open={bookModalOpen}
          onCancel={() => setBookModalOpen(false)}
          clienteData={data?.data?.data}
        />
      )}
      {open && (
        <UserModal
          open={open}
          onCancel={() => setOpen(false)}
          clienteData={data?.data?.data}
          openBookModal={() => setBookModalOpen(true)}
        />
      )}
      <Wrapper.Room
        color={
          clienteInfo?.userID
            ? "red"
            : !clienteInfo?.userID && clienteInfo?.isBooked
            ? "yellow"
            : "green"
        }
        onClick={() => (!isLoading ? onClickHandler() : false)}
      >
        {clienteInfo?.isBooked && (
          <Tooltip placement="top" title="Это место забронировано">
            <Wrapper.BookedTag color="warning">
              <ExclamationCircleOutlined />
            </Wrapper.BookedTag>
          </Tooltip>
        )}
        {isLoading && clienteInfo?.userID ? (
          <LoadingOutlined />
        ) : (
          clienteInfo?.userID &&
          !isLoading &&
          dayjs(data?.data?.data?.remainingDays).diff(new Date(), "d")
        )}
      </Wrapper.Room>
    </>
  );
};

export default Room;
