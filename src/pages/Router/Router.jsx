import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./constants";
import LayoutWrapper from "./LayoutWrapper";
import PrivateRouter from "./PrivateRouter";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---Public routes-------- */}
        {publicRoutes.map((route, index) => (
          <Route
            key={route.key + index}
            path={route.path}
            element={
              <LayoutWrapper layoutIdentifier={route.layoutType}>
                <Suspense fallback={route.loadingFallback}>
                  {route.component}
                </Suspense>
              </LayoutWrapper>
            }
          />
        ))}
        {/* ---Public routes End-------- */}
        <Route path="/login" element={<PrivateRouter isloginUrl={true} />} />
        <Route path="/" element={<PrivateRouter />}>
          {/* ---Private routes */}
          {privateRoutes.map((route, index) => (
            <Route
              key={route.key + index}
              path={route.path}
              element={
                <LayoutWrapper layoutIdentifier={route.layoutType}>
                  <Suspense fallback={route.loadingFallback}>
                    {route.component}
                  </Suspense>
                </LayoutWrapper>
              }
            />
          ))}
          {/* ---Private routes end*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
