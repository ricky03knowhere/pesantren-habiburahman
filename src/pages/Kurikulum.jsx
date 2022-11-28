import axios from "axios";
import React, { useState, useEffect } from "react";
import Ekstrakulikuler from "../components/Ekstrakulikuler";
import Kegiatan from "../components/Kegiatan";
import Kitab from "../components/Kitab";
import PageTitle from "../components/PageTitle";
import { changeTitle, SERVER_URL } from "../utils/utils.js";

const Kurikulum = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [kitab, setKitab] = useState([]);
  const [ekstra, setEkstra] = useState([]);

  const getData = (url, state) => {
    axios
      .get(url)
      .then(({ data }) => state(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    changeTitle("Kurikulum");
    getData(SERVER_URL + "info/kegiatan", setKegiatan);
    getData(SERVER_URL + "info/kitab", setKitab);
    getData(SERVER_URL + "info/ekstra", setEkstra);
  }, []);

  return (
    <section id="kurikulum">
      <div class="container">
        <PageTitle title="Kurikulum" />

        {/* <!-- JADWAL KEGIATAN START --> */}
        <Kegiatan data={kegiatan} />
        {/* <!-- JADWAL KEGIATAN END --> */}

        {/* <!--KITAB START--> */}
        <Kitab data={kitab} />
        {/* <!--KITAB END--> */}

        {/* <!--EKSTRAKULIKULER START--> */}
        <Ekstrakulikuler data={ekstra} />
        {/* <!-- EKSTRAKULIKULER END --> */}
      </div>
    </section>
  );
};

export default Kurikulum;
