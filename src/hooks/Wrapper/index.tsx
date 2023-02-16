import { FC } from "react";
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "../../redux";
import ru_RU from "antd/locale/ru_RU";

const Wrapper: FC<{ children: any }> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Provider store={store}>
          <BrowserRouter>
            <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default Wrapper;
