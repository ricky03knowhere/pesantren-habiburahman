import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/utils";

const Ekstrakulikuler = () => {
  const [ekstrakulikuler, setEkstrakulikuler] = useState([]);

  useEffect(() => {
    axios
      .get(SERVER_URL + "info/ekstra")
      .then(({ data }) => setEkstrakulikuler(data))
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
                  sports_basketball
                </i>
                Daftar Ekstrakulikuler
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
                      Nama Ekstrakulikuler
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Deskripsi
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ekstrakulikuler.map((el, i) => (
                    <tr>
                      <td>
                        <p class="text-sm text-secondary mb-0">{i + 1}</p>
                      </td>
                      <td>
                        <div class="d-flex px-2">
                          {/* <div>
                            <img
                              src={`${SERVER_URL}images/${el.picture}`}
                              class="avatar avatar-sm rounded-circle me-2"
                              alt="spotify"
                            />
                          </div> */}
                          <div class="my-auto">
                            <h6 class="mb-0 text-sm font-weight-bolder">{el.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p class="text-sm text-secondary mb-0">
                          {el.desc.substring(0, 85) + "..."}
                        </p>
                      </td>
                      <td>
                        <p class="text-sm text-secondary mb-0">
                          <i class="material-icons opacity-10 me-2">edit</i>
                          Edit
                        </p>
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

export default Ekstrakulikuler;
