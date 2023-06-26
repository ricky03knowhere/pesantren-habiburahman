import React, { useEffect, useState } from "react";
import { checkPembayaran } from "../interfaces";
import axios from "axios";
import { SERVER_URL } from "../utils/utils";

const FormPembayaran = () => {
  const [pembayaran, setPembayaran] = useState([]);
  const [postData, setPostData] = useState({});

  useEffect(async () => {
    const getData = await checkPembayaran();
    const filteredData = getData.filter((el) => el.status === "unpaid");
    setPembayaran(filteredData);
  }, []);

  const handleChange = (e) => {
    const data = {
      ...postData,
      status: "pending",
      payDate: new Date(new Date().getTime()),
      [e.target.name]:
        e.target.name === "picture" ? e.target.files[0] : e.target.value,
    };
    console.log(data);
    setPostData(data);
  };

  const handleSubmit = async () => {
    console.log("id ==>> ", postData);
    if (postData.id === "null") {
      window.alert("Pilih Pembayaran");
      // return (window.location.href = "/spp");
    } else {
      await axios
        .post(SERVER_URL + "transaction/spp/pay", postData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }) => {
          console.log(data);
          return (window.location.href = "/history_pembayaran");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div class="row" style={{ marginBottom: "13em" }}>
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-info shadow-info border-radius-lg pt-4 pb-3">
              <h5 class="text-white text-capitalize ps-3 font-weight-bold">
                <i
                  class="material-icons opacity-10 me-2"
                  style={{ transform: "scale(1.3)" }}
                >
                  receipt_long
                </i>
                Form Pembayaran
              </h5>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <form method="post">
              <div className="row p-4">
                <div className="col-md-6">
                  <label for="formFile" class="form-label">
                    Daftar Pembayaran
                  </label>
                  <select
                    style={{ padding: "5px" }}
                    class="form-select"
                    aria-label="Default select example"
                    name="id"
                    onChange={handleChange}
                    required
                  >
                    <option value="null" selected>
                      Pilih pembayaran
                    </option>

                    {pembayaran.map((el) => {
                      return el.type === "pendaftaran" ? (
                        <option value={el._id}>Biaya Pendaftaran</option>
                      ) : (
                        <option value={el._id}>
                          Spp Bulan{" "}
                          {new Date(el.dueDate).toLocaleString("id-ID", {
                            month: "long",
                            year: "numeric",
                          })}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Bukti Pembayaran
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      style={{ border: "1px #adb5bd solid" }}
                      required
                      name="picture"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="float-end"
                    type="button"
                    style={{
                      padding: ".5em 2em",
                      background: "linear-gradient(195deg,#49a3f1,#1a73e8)",
                      borderRadius: "0.5rem",
                      display: "block",
                      borderColor: "#1a73e8",
                      borderStyle: "solid",
                    }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPembayaran;
