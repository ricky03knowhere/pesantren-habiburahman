import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/utils";

const Santri = () => {
  const [santri, setSantri] = useState([]);

  useEffect(() => {
    axios
      .get(SERVER_URL + "info/santri")
      .then(({ data }) => setSantri(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
              <h5 class="text-white text-capitalize ps-3">
                <i
                  class="material-icons opacity-10 me-2"
                  style={{ transform: "scale(1.3)" }}
                >
                  school
                </i>
                Daftar Santri
              </h5>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      No.
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Nama Santri
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      No. Telepon
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Tanggal Lahir
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Alamat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {santri.map((el, i) => (
                    <tr>
                      <td>
                        <p class="text-sm text-secondary mb-0">{i + 1}</p>
                      </td>
                      <td>
                        <div class="d-flex px-2">
                          <div>
                            <img
                              src={el.picture}
                              class="avatar avatar-sm rounded-circle me-2"
                              alt="spotify"
                            />
                          </div>
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm font-weight-bold">
                              {el.name}
                            </h6>
                            <p class="text-xs text-secondary mb-0">
                              {el.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm text-secondary mb-0">{el.phone}</p>
                      </td>
                      <td>
                        <span class="text-secondary text-sm font-weight-bold">
                          {new Date(el.birthDate).toLocaleString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </td>
                      <td>
                        <p class="text-sm text-secondary mb-0">{el.address}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Santri;
