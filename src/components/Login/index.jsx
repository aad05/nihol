import { useState } from "react";
import { phoneNumberFormatter } from "../../Generic/InputAPI";
import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import { useAxios } from "../../hooks/useAxios";
import useNotification from "../../hooks/useNotification";
import {
  loginEmptyError,
  loginPasswordLengthError,
  useResponseErrorChecker,
} from "../../Generic/NotificationAPI";
import { useSignIn } from "react-auth-kit";

const Login = () => {
  const reponseErrorChecker = useResponseErrorChecker();
  const signIn = useSignIn();
  const notification = useNotification();
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const [warningAnimation, setWarningAnimation] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const playWarningAnim = () => {
    setWarningAnimation(true);
    setTimeout(() => {
      setWarningAnimation(false);
    }, 1000);
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "phoneNumber")
      return setUserInfo({
        ...userInfo,
        [e.target.name]: phoneNumberFormatter(e.target.value),
      });
    return setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 13 || e.type === "click") onAuth();
    else return;
  };

  const onAuth = () => {
    if (loading) return;
    // Login not filling error
    if (!userInfo?.password || !userInfo.phoneNumber) {
      playWarningAnim();
      return notification(loginEmptyError);
    }
    // Password Length Error
    if (userInfo?.password.length < 6) {
      playWarningAnim();
      return notification(loginPasswordLengthError);
    }
    setLoading(true);

    axios({
      url: "/user/sign-in",
      method: "POST",
      body: {
        ...userInfo,
        phoneNumber: `+998${userInfo?.phoneNumber.replace(/[^\d]/g, "")}`,
      },
    }).then((res) => {
      try {
        const { token, user } = res?.data.data;
        localStorage.setItem("token", token);
        signIn({
          token: token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            ...user,
          },
        });
        setLoading(false);
      } catch (error) {
        reponseErrorChecker(res);
        setLoading(false);
      }
    });
  };

  return (
    <Wrapper>
      <Wrapper.Right>
        <Wrapper.Right.Container>
          {/* <Wrapper.Logo src={logo} alt="logo" /> */}
          <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
          <Wrapper.Description>
            Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga
            intilamiz.
          </Wrapper.Description>
          <Wrapper.Input
            allowClear={true}
            bordered={false}
            addonBefore={"+998"}
            onChange={(e) => onChangeHandler(e)}
            value={userInfo.phoneNumber}
            name="phoneNumber"
            placeholder="Tel raqam"
          />
          <Wrapper.InputPassword
            onChange={(e) => onChangeHandler(e)}
            onKeyDown={(e) => onKeyDownHandler(e)}
            value={userInfo.password}
            name="password"
            placeholder="Rarol"
            maxLength={9}
            minLength={6}
          />
          <Wrapper.Scanner
            warningAnimation={warningAnimation}
            login
            onClick={onKeyDownHandler}
          >
            {loading ? <LoadingOutlined /> : "Login"}
          </Wrapper.Scanner>
        </Wrapper.Right.Container>
      </Wrapper.Right>
    </Wrapper>
  );
};
export default Login;
