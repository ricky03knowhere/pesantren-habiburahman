import axios from "axios";
import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../../utils/utils";

function EditBiayaModal({ biaya }) {
  biaya = biaya[0];
  // console.log("data ==>> ", biaya);

  const [data, setData] = useState({});

  // console.log("biaya ==>> ");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios
      .put(SERVER_URL + "info/biaya", { id: biaya._id, ...data })
      .then(() => {
        window.location.href = "/web_biaya";
        alert("Successfuly updated.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      class="modal fade"
      id="modal-1"
      tabindex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content single-card">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle">
              Edit Data
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
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Deskripsi
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder={biaya.desc}
                      name="desc"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Biaya
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder={biaya.price}
                      name="price"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="button boxed-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBiayaModal;
