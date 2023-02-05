import { FC, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { paths } from "../utils/paths";

const Login = lazy(() => import("../components/Login"));

const Root: FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="/login">
              <Navbar />
            </RequireAuth>
          }
        >
          {paths.map(({ path, RenderComp, _id }) => (
            <Route path={path} element={<RenderComp />} key={_id} />
          ))}
        </Route>
        {isAuthenticated() ? (
          <Route path="/login" element={<Navigate to={`/`} />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default Root;
