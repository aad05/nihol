import { FC, useState } from "react";
import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import { useAxios } from "../../hooks/useAxios";
import { useSignIn } from "react-auth-kit";
// import logo from "../../assets/icons/logo.png";
import useNotification from "../../Generic/notification";
import { useNavigate } from "react-router-dom";

interface UserInput {
  fullName: string;
  password: string;
}

const Login: FC = () => {
  const axios = useAxios();
  const signIn = useSignIn();
  const navigate = useNavigate();
  const notification = useNotification();
  const [warningAnimation, setWarningAnimation] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<UserInput>({
    fullName: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const playWarningAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  };
  const handleAuth: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.keyCode === 13 || e.type === "click") onAuth();
    else return;
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const onAuth = async () => {
    if (loading) return;
    if (!userInput.fullName || !userInput.password) {
      playWarningAnim();
      notification({
        type: "error",
        message: "Ошибка",
        description: "Пожалуйста заполните все поля!",
        placement: "topRight",
      });
      return;
    }
    try {
      setLoading(true);
      axios({
        url: "/user/login",
        method: "POST",
        body: userInput,
      })
        .catch((err) => {
          console.log(err);

          playWarningAnim();
          notification({
            type: "error",
            message: "Ошибка",
            description: "Упс! Что-то пошло не так!",
            placement: "topRight",
          });
          setLoading(false);
          return;
        })
        .then((data) => {
          const { data: recievedData } = data?.data;
          const { flowType, fullName } = recievedData?.user;
          localStorage.setItem("token", recievedData?.token);
          signIn({
            token: recievedData?.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: { flowType, fullName },
          });
          navigate("/");
          setLoading(false);
        });
    } catch (error) {
      // playWarningAnim();
      // notification({
      //   type: "error",
      //   message: "Ошибка",
      //   description: "Упс! Что-то пошло не так!",
      //   placement: "topRight",
      // });
      // setLoading(false);
      // return;
    }
  };

  return (
    <>
      <Wrapper>
        <Wrapper.Right>
          <Wrapper.Right.Container>
            {/* <Wrapper.Logo src={logo} alt="logo" /> */}
            <Wrapper.Title>И снова здравствуйте!</Wrapper.Title>
            <Wrapper.Description>
              Мы стремимся предоставлять лучший сервис каждый день, чем вчера.
              &#128526; &#128579;
            </Wrapper.Description>
            <Wrapper.Input
              value={userInput.fullName}
              onChange={changeHandler}
              name="fullName"
              placeholder="Имя"
            />
            <Wrapper.InputPassword
              value={userInput.password}
              onChange={changeHandler}
              onKeyDown={handleAuth}
              name="password"
              placeholder="Пароль"
            />

            <Wrapper.Scanner
              onClick={handleAuth}
              warningAnimation={warningAnimation}
              login
            >
              {loading ? <LoadingOutlined /> : "Login"}
            </Wrapper.Scanner>
          </Wrapper.Right.Container>
        </Wrapper.Right>
      </Wrapper>
    </>
  );
};
export default Login;
