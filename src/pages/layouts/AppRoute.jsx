import React from "react";
import { Route, Routes } from "react-router-dom";
import Kurikulum from "../Kurikulum";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const getUser = localStorage.getItem("user");
  const user = JSON.parse(getUser);
  console.log("Auth User ==>> ", user);
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <Layout user={user}>
            <Component />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoute;
