import axios from "axios";
import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../utils/utils.js";

function LoginModal() {
  const [qrCode, setqrCode] = useState("");
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState({ status: false, errors: "" });

  useEffect(() => {
    axios
      .post(SERVER_URL + "qr/generate")
      .then((res) => {
        // console.log(res.data);
        setqrCode(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    console.log(authData);
    let value = e.target.value;
    let data = { ...authData, [e.target.name]: value };
    setAuthData(data);
    setAuthError({ status: false, errors: "" });
  };

  const handleSubmit = () => {
    console.log("authData ==>> ", authData);
    axios
      .post(SERVER_URL + "auth/login", authData)
      .then(({ data }) => {
        console.log("data ==>> ", data.token);
        const user = jwt.verify(data.token, "QRCODEAUTH");
        console.log("user ==>> ", user);
        localStorage.setItem("user", JSON.stringify(user));

        if (user.isAdmin || user.position === "santri")
          return (window.location.href = user.position + "_dashboard");
        else return (window.location.href = "/");
      })
      .catch(({ response }) => {
        setAuthError({ status: true, errors: response?.data });
      });
  };

  return (
    <div
      class="modal fade"
      id="modal-99"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content single-card">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">
              Login Method
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul
              class="nav nav-tabs nav-fill nav-justified"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="login-tab"
                  data-toggle="tab"
                  href="#login"
                  role="tab"
                  aria-controls="login"
                  aria-selected="true"
                >
                  <i class="fa fa-user-lock mr-2"></i>Login
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="qrcode-tab"
                  data-toggle="tab"
                  href="#qrcode"
                  role="tab"
                  aria-controls="qrcode"
                  aria-selected="false"
                >
                  <i class="fa fa-qrcode mr-2"></i>Scan QRCode
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <div class="row">
                  <div class="col-12">
                    <h5 className="text-center m-5">Form Login</h5>
                  </div>
                  {authError.status && authError.errors ? (
                    <div class="col-lg-8 m-auto">
                      <div class="alert alert-danger text-light" role="alert">
                        <i class="fa fa-exclamation-triangle mr-2"></i>
                        {authError.errors}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div class="col-lg-8 m-auto">
                    <form
                      class="form-contact contact_form"
                      method="post"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div class="row justify-items-center">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              class="form-control valid"
                              name="email"
                              id="email"
                              type="email"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = 'Enter email address'"
                              placeholder="Email"
                              value={authData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input
                              class="form-control valid"
                              name="password"
                              id="password"
                              type="password"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = 'Enter your password'"
                              placeholder="Enter your password"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group mt-3 float-right">
                        <button
                          type="button"
                          class="button boxed-btn"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="qrcode"
                role="tabpanel"
                aria-labelledby="qrcode-tab"
              >
                <h5 className="text-center m-5">Scan to Login</h5>
                <div class="row text-center">
                  <div class="img-wrapper">
                    <img
                      src={qrCode}
                      width="200"
                      className="img-thumbnail shadow p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
