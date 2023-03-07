import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setErrorStatus } from "../../redux/errorSlice";
const { REACT_APP_BASE_URL } = process.env;

export const useAxios = () => {
  const request = async ({
    url,
    method,
    body,
    headers,
    includeToken = true,
    params,
    ...others
  }) => {
    return await axios({
      method,
      url: `${REACT_APP_BASE_URL}${url}`,
      data: {
        ...body,
        params: {
          ...params,
        },
      },
      ...others,
      headers: {
        Authorization: `${
          includeToken && `Bearer ${localStorage.getItem("token")}`
        }`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
        ...headers,
      },
    })
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
  return request;
};

export const useAxiosGetDataOnly = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const request = async ({
    url,
    method,
    body,
    headers,
    includeToken = true,
    params,
  }) => {
    return await axios({
      method,
      url: `${REACT_APP_BASE_URL}${url}`,
      data: {
        ...body,
        params: {
          ...params,
        },
      },
      headers: {
        Authorization: `${
          includeToken && `Bearer ${localStorage.getItem("token")}`
        }`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
        ...headers,
      },
    })
      .then((response) => response.data.data)
      .catch((error) => {
        dispatch(() => setErrorStatus(error.response.status));
        navigate("/error");
        return error;
      });
  };
  return request;
};
