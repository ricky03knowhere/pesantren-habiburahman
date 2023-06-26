import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, json } from "react-router-dom";
import { SERVER_URL } from "../../utils/utils";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    axios
      .get(SERVER_URL + "qr/loggedUser")
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        setLoggedUser(data);
      })
      .catch((err) => {
        console.log(err);
        setLoggedUser(null);
      });
  }, []);

  const getUser = localStorage.getItem("user");
  const user = getUser ? JSON.parse(getUser) : loggedUser ? loggedUser : null;

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
