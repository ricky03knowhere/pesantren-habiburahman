import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils/utils";
import EditBiayaModal from "../../components/dashboardPage/EditBiayaModal";

const Biaya = () => {
  const [biaya, setBiaya] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    axios
      .get(SERVER_URL + "info/biaya")
      .then(({ data }) => setBiaya(data))
      .catch((err) => console.log(err));
  }, []);

  function totalCotainer(val) {
    return (
      <tr>
        <td></td>
        <td className="font-weight-bold">Total</td>
        <td className="font-weight-bold">
          {val.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </td>
        <td></td>
      </tr>
    );
  }

  function loadEditModal(e) {
    setModal("");
    const id = e.target.dataset.id;
    console.log("id ==>> ", e.target);
    const data = biaya.filter((item) => item._id === id);
    console.log("data ==>> ", data);
    setModal(<EditBiayaModal biaya={data} />);
  }

  let total;

  function fillTable(type) {
    total = 0;
    return biaya
      .filter((el) => el.type === type)
      .map((data, i) => {
        total += data.price;
        return (
          <tr>
            <td>
              <p class="text-sm text-secondary mb-0">{i + 1}</p>
            </td>
            <td>
              <p class="text-sm text-secondary mb-0">{data.desc}</p>
            </td>
            <td>
              <p class="text-sm text-secondary mb-0">
                {data.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </td>
            <td>
              <p
                class="text-sm text-secondary mb-0 d-block"
                data-toggle="modal"
                data-target="#modal-1"
                data-id={data._id}
                onClick={loadEditModal}
              >
                <i class="material-icons opacity-10 me-2">edit</i>Edit
              </p>
            </td>
          </tr>
        );
      });
  }

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
                  payments
                </i>
                Daftar Biaya Putra
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
                      Biaya
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Rincian
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fillTable("putra")} {totalCotainer(total)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
              <h5 class="text-white text-capitalize ps-3">
                <i
                  class="material-icons opacity-10 me-2"
                  style={{ transform: "scale(1.3)" }}
                >
                  payments
                </i>
                Daftar Biaya Putri
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
                      Biaya
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Rincian
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fillTable("putri")} {totalCotainer(total)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- MODAL START --> */}
      {modal ? modal : ""}
      {/* <!-- MODAL END --> */}
    </div>
  );
};

export default Biaya;
