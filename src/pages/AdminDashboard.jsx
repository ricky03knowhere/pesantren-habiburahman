import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <div class="row mt-5">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">money</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Today's Money</p>
                <h4 class="mb-0">RP530k</h4>
              </div>
            </div>
            <hr class="dark horizontal my-0" />
            <div class="card-footer p-3">
              <p class="mb-0">
                <span class="text-success text-sm font-weight-bolder">
                  +55%{" "}
                </span>
                than lask week
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">money</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Monthly Money</p>
                <h4 class="mb-0">Rp7,300K</h4>
              </div>
            </div>
            <hr class="dark horizontal my-0" />
            <div class="card-footer p-3">
              <p class="mb-0">
                <span class="text-success text-sm font-weight-bolder">
                  +3%{" "}
                </span>
                than lask month
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Pengajar</p>
                <h4 class="mb-0">9</h4>
              </div>
            </div>
            <hr class="dark horizontal my-0" />
            <div class="card-footer p-3">
              {/* <p class="mb-0">
                <span class="text-danger text-sm font-weight-bolder">-2%</span>{" "}
                than yesterday
              </p> */}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-header p-3 pt-2">
              <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                <i class="material-icons opacity-10">person</i>
              </div>
              <div class="text-end pt-1">
                <p class="text-sm mb-0 text-capitalize">Total Santri</p>
                <h4 class="mb-0">115</h4>
              </div>
            </div>
            <hr class="dark horizontal my-0" />
            <div class="card-footer p-3">
              <p class="mb-0">
                {/* <span class="text-success text-sm font-weight-bolder">
                  +5%{" "}
                </span>
                than yesterday */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
