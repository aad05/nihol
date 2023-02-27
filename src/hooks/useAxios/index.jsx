import axios from "axios";
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
      .catch((error) => error);
  };
  return request;
};

export const useAxiosGetDataOnly = () => {
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
      .catch((error) => error);
  };
  return request;
};
