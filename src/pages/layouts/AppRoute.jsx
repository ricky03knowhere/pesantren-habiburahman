import React from "react";
import { Route, Routes } from "react-router-dom";
import Kurikulum from "../Kurikulum";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  // console.log(Component);
  // console.log(Layout);
  // console.log(rest);
  return (
    <Routes>
      <Route {...rest} render={(props) => <Kurikulum />} />
    </Routes>
  );
};

export default AppRoute;
