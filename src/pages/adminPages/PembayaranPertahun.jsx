const PembayaranPertahun = () => {
  let pembayaran = [
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "pendaftaran",
      price: 800000,
      dueDate: "2023-01-25T17:36:42.280Z",
      status: "paid",
      payDate: "2023-01-26T07:42:23.093Z",
      user: [{ name: "Chopper" }],
    },
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "spp",
      price: 900000,
      dueDate: "2023-02-21T17:36:42.280Z",
      status: "paid",
      payDate: "2023-02-21T07:42:23.093Z",
      user: [{ name: "Zoro" }],
    },
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "spp",
      price: 900000,
      dueDate: "2023-03-15T17:36:42.280Z",
      status: "paid",
      payDate: "2023-03-16T07:42:23.093Z",
      user: [{ name: "Kaido" }],
    },
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "spp",
      price: 900000,
      dueDate: "2023-04-02T17:36:42.280Z",
      status: "paid",
      payDate: "2023-04-06T07:42:23.093Z",
      user: [{ name: "Robbin" }],
    },
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "spp",
      price: 900000,
      dueDate: "2023-02-25T17:36:42.280Z",
      status: "paid",
      payDate: "2023-02-26T07:42:23.093Z",
      user: [{ name: "Kid" }],
    },
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "spp",
      price: 900000,
      dueDate: "2023-05-25T17:36:42.280Z",
      status: "paid",
      payDate: "2023-05-26T07:42:23.093Z",
      user: [{ name: "Denji" }],
    },
    {
      _id: "63a88a2a76b9cdfe6d246ee8",
      type: "spp",
      price: 900000,
      dueDate: "2023-06-25T17:36:42.280Z",
      status: "paid",
      payDate: "2023-06-26T07:42:23.093Z",
      user: [{ name: "Makima" }],
    },
  ];
  return (
    <div class="row" id="pembayaran">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3">
              <h5 class="text-white text-capitalize ps-3">
                <i
                  class="material-icons opacity-10 me-2"
                  style={{ transform: "scale(1.3)" }}
                >
                  history
                </i>
                History Pembayaran Tahun ini
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
                      Pembayaran
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Tanggal Bayar
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Status
                    </th>
                    <th class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2 pe-0">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pembayaran
                    // .filter((pem) => pem.status !== "false")
                    .map((pem, i) => (
                      <tr>
                        <td>
                          <p class="text-sm text-secondary mb-0">{i + 1}</p>
                        </td>
                        <td>
                          <p class="text-sm text-secondary mb-0">
                            {pem.user[0]?.name}
                          </p>
                        </td>
                        <td>
                          <p class="text-sm text-secondary mb-0">
                            {pem.type === "pendaftaran"
                              ? "Biaya Pendaftaran"
                              : "SPP Bulan " +
                                new Date(pem.dueDate).toLocaleString("id-ID", {
                                  month: "long",
                                  year: "numeric",
                                })}
                          </p>
                        </td>
                        <td>
                          <span class="text-secondary text-sm font-weight-bold">
                            {pem.payDate
                              ? new Date(pem.payDate).toLocaleString("id-ID", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "-"}
                          </span>
                        </td>
                        <td>
                          {pem.status === "unpaid" ? (
                            <span class="badge badge-sm bg-gradient-danger">
                              unpaid
                            </span>
                          ) : pem.status === "pending" ? (
                            <span class="badge badge-sm bg-gradient-warning">
                              {pem.status}
                            </span>
                          ) : (
                            <span class="badge badge-sm bg-gradient-success">
                              {pem.status}
                            </span>
                          )}
                        </td>
                        <td>
                          <div className="row">
                            <div className="col-1" id="infoPem">
                              <i
                                class="material-icons opacity-10 me-2"
                                data-toggle="modal"
                                data-target="#modal-1"
                                // onClick={(e) =>
                                //   loadPembayaranModal(e, setModal, pembayaran)
                                // }
                                data-id={i}
                              >
                                info
                              </i>
                            </div>
                            <div
                              class="form-check form-switch col-1"
                              id="verificatePem"
                            >
                              <input
                                class="form-check-input ms-auto"
                                type="checkbox"
                                value={pem._id}
                                // onChange={handleClickChange}
                                checked
                                disabled={pem.status === "paid"}
                              />
                            </div>
                          </div>
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

export default PembayaranPertahun;
