import { ConfigProvider } from "antd";
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "../../redux";

const UseWrapper = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
          </Provider>
        </QueryClientProvider>
      </ConfigProvider>
    </AuthProvider>
  );
};

export default UseWrapper;
