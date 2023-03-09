import { Button, Result } from "antd";
import { useDispatch } from "react-redux";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";

const EmptyUser = () => {
  const dispatch = useDispatch();
  return (
    <Result
      status="404"
      subTitle="Xona bo'sh. «Qo'shish» tugmasini bosish orqali yangi foydalanuvchi qo'shishingiz mumkin."
      extra={
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              switchAddUserModalVisibility({ loading: false, open: true })
            )
          }
        >
          Qo'shish
        </Button>
      }
    />
  );
};

export default EmptyUser;
