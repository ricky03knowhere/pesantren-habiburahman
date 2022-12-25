import React from "react";
import { SERVER_URL } from "../utils/utils";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user ==>> ", user);
  return (
    <>
      <div
        class="page-header min-height-300 border-radius-xl mt-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <span class="mask  bg-gradient-primary  opacity-6"></span>
      </div>
      <div class="card card-body mx-3 mx-md-4 mt-n6">
        <div class="row gx-4 mb-2">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img
                src={`${SERVER_URL}images/${user.picture}`}
                alt="profile_image"
                class="w-100 border-radius-lg shadow-sm"
              />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">{user.name}</h5>
              <p class="mb-0 font-weight-normal text-sm text-capitalize">
                {user.position}
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card card-plain h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 d-flex align-items-center">
                    <h6 class="mb-0 font-weight-bolder">Profile Information</h6>
                  </div>
                  <div class="col-md-4 text-end">
                    <a href="javascript:;">
                      <i
                        class="fas fa-user-edit text-secondary text-sm"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit Profile"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body p-3 row justify-content-between">
                <div className="col-md-5">
                  <p class="text-sm">
                    Hi, I'm {user.name}, Decisions: If you can't decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </p>
                  <hr class="horizontal gray-light my-4" />
                </div>
                <div className="col-md-3">
                  <ul class="list-group">
                    <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                      <strong class="text-dark">
                        <i class="fa fa-id-card me-2"></i>Nama :
                      </strong>{" "}
                      &nbsp; {user.name}
                    </li>
                    <li class="list-group-item border-0 ps-0 text-sm">
                      <strong class="text-dark">
                        <i class="fa fa-envelope me-2"></i>Email :
                      </strong>{" "}
                      &nbsp;
                      {user.email}
                    </li>
                    <li class="list-group-item border-0 ps-0 text-sm">
                      <strong class="text-dark">
                        <i class="fa fa-phone-alt me-2"></i> Telepone :
                      </strong>{" "}
                      &nbsp; {user.phone}
                    </li>
                    <li class="list-group-item border-0 ps-0 text-sm">
                      <strong class="text-dark">
                        <i class="fa fa-map-marked-alt me-2"></i> Alamat :
                      </strong>{" "}
                      &nbsp; {user.address}
                    </li>
                    <li class="list-group-item border-0 ps-0 pb-0">
                      <strong class="text-dark text-sm">
                        <i class="fa fa-globe me-2"></i> Social :
                      </strong>{" "}
                      &nbsp;
                      <a
                        class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                        href="javascript:;"
                      >
                        <i class="fab fa-facebook fa-lg"></i>
                      </a>
                      <a
                        class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                        href="javascript:;"
                      >
                        <i class="fab fa-twitter fa-lg"></i>
                      </a>
                      <a
                        class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                        href="javascript:;"
                      >
                        <i class="fab fa-instagram fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul class="list-group">
                    <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                      <strong class="text-dark">
                        <i class="fa fa-calendar-alt me-2"></i>Tanggal Lahir :
                      </strong>{" "}
                      &nbsp;{" "}
                      {new Date(user.birthDate).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </li>
                    <li class="list-group-item border-0 ps-0 text-sm">
                      <strong class="text-dark">
                        <i class="fa fa-graduation-cap me-2"></i> Edukasi :
                      </strong>{" "}
                      &nbsp;{" "}
                      {user.education.length === 0 ? (
                        "-"
                      ) : (
                        <ul className="mb-3">
                          {user?.education?.map((el) => (
                            <li className="ms-4"> ● {el}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
