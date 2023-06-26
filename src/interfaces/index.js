import axios from "axios";
import { SERVER_URL } from "../utils/utils";
import PembayaranModal from "../components/dashboardPage/PembayaranModal";

const checkPembayaran = async () => {
  const { _id } = JSON.parse(localStorage.getItem("user"));

  const getData = await axios
    .get(`${SERVER_URL}transaction/pembayaran/${_id}`)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
  return getData;
};

function loadPembayaranModal(e, setModal, pembayaran) {
  setModal("");
  const id = e.target.dataset.id;
  console.log("id ==>> ", id);
  const data = pembayaran.filter((item) => pembayaran.indexOf(item) == id);
  console.log("data ==>> ", data);
  setModal(<PembayaranModal pembayaran={data} />);
}

const handleLogout = () => {
  console.log("ok");

  // const { qrCode } = JSON.parse(localStorage.getItem("user"));
  // axios
  //   .put(SERVER_URL + "qr/logoutUser/" + qrCode?.connectedDeviceId)
  //   .then((res) => console.log("ok"))
  //   .catch((err) => console.log(err));
  localStorage.clear();
  window.location.href = "/";
};

const handleClickLogout = () => {
  if (window.confirm("Are you sure to logout,.?")) return handleLogout();
  else return null;
};

export {
  checkPembayaran,
  loadPembayaranModal,
  handleLogout,
  handleClickLogout,
};
