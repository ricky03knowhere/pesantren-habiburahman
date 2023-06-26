import axios from "axios";
import React, { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import { SERVER_URL } from "../utils/utils";

const SantriRegister = () => {
  const [data, setdata] = useState({});

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const { user_id, email, name } = JSON.parse(localStorage.getItem("user"));
    setUserId(user_id);
    console.log("userId ==>> ", userId);

    setdata({ email, name, education: ["", ""] });
  }, []);

  const handleChange = (e) => {
    const formData = {
      ...data,
      position: "santri",
      [e.target.name]: e.target.value,
    };
    console.log("formData ==>> ", formData);
    setdata(formData);
  };

  const handleEducation = (e) => {
    let value1 =
      e.target.name === "education1" ? e.target.value : data.education[0];
    let value2 =
      e.target.name === "education2" ? e.target.value : data.education[1];
    let education = [value1, value2];
    setdata({ education });
  };

  const updateUserData = async () => {
    return await axios
      .get(`${SERVER_URL}user/${userId}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    setdata((state) => state);
    axios
      .post(`${SERVER_URL}user/register/${userId}`, data)
      .then(async () => {
        const getUser = await updateUserData();
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(getUser));
        console.log("Santri Successfuly Registered.");
        window.location.href = "/santri_dashboard";
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="santriRegister" style={{ marginTop: "23em" }}>
      <div class="container">
        <PageTitle title="Form Pendaftaran Santri" />
        <div class="row">
          {/* {authError.status && authError.errors ? (
        <div class="col-lg-8 m-auto">
          <div class="alert alert-danger text-light" role="alert">
            <i class="fa fa-exclamation-triangle mr-2"></i>
            {authError.errors}
          </div>
        </div>
      ) : (
        ""
      )} */}
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
                      value={data.email}
                      disabled
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="name"
                      id="name"
                      type="name"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                      value={data.name}
                      disabled
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="birthDate"
                      id="birthDate"
                      type="date"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter birthDate address'"
                      placeholder="Birth date"
                      // value={authData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="phone"
                      id="phone"
                      type="number"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your phone'"
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="address"
                      id="address"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your address'"
                      placeholder="Enter your address"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="proffession"
                      id="proffession"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your proffession'"
                      placeholder="Enter your proffession"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="col-sm-6 education">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="education1"
                      id="education1"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter education1 address'"
                      placeholder="First Education"
                      // value={data.education[0]}
                      onChange={handleEducation}
                    />
                  </div>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    onChange={handleChange}
                    name="gender"
                    required
                    style={{paddingLeft: '1em'}}
                  >
                    <option selected>Pilih Gender</option>
                    <option value="putra">Laki - Laki</option>
                    <option value="putri">Perempuan</option>
                  </select>
                </div>
                <div class="col-sm-6 education">
                  <div class="form-group">
                    <input
                      class="form-control valid"
                      name="education2"
                      id="education2"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter your education2'"
                      placeholder="Second Education"
                      // value={data.education[1]}
                      onChange={handleEducation}
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SantriRegister;
