import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { paths } from "../utils/paths";
const Error = lazy(() => import("../components/Error"));

const Login = lazy(() => import("../components/Login"));
const NotFound = lazy(() => import("../components/NotFound"));

const Root = () => {
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
          {paths.map(({ path, RenderComp, _id, hasChild, children }) =>
            !hasChild ? (
              <Route path={path} element={<RenderComp />} key={_id} />
            ) : (
              <Route path={path} element={<RenderComp />} key={_id}>
                {children?.map(({ path, RenderComp: ChildRenderComp, _id }) => (
                  <Route key={_id} path={path} element={<ChildRenderComp />} />
                ))}
              </Route>
            )
          )}
        </Route>
        {isAuthenticated() ? (
          <Route path="/login" element={<Navigate to={`/`} />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="*" element={<NotFound />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default Root;
