import { Button, Result } from "antd";
import { useDispatch } from "react-redux";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";

const EmptyUser = () => {
  const dispatch = useDispatch();
  return (
    <Result
      status="404"
      subTitle="Комната пуста. Вы можете добавить нового пользователя, нажав «Добавить»"
      extra={
        <Button
          type="primary"
          onClick={() =>
            dispatch(
              switchAddUserModalVisibility({ loading: false, open: true })
            )
          }
        >
          Добавить
        </Button>
      }
    />
  );
};

export default EmptyUser;
