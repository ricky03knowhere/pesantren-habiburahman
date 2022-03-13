import React, { Component } from "react";
import Ekstrakulikuler from "../components/Ekstrakulikuler";
import Kegiatan from "../components/Kegiatan";
import Kitab from "../components/Kitab";
import PageTitle from "../components/PageTitle";
import { changeTitle } from "../utils/utils";

class Kurikulum extends Component {
  componentDidMount() {
    changeTitle("Kurikulum");
  }

  render() {
    return (
      <section id="kurikulum">
        <div class="container">
          <PageTitle title="Kurikulum" />
          
          {/* <!-- JADWAL KEGIATAN START --> */}
          <Kegiatan />
          {/* <!-- JADWAL KEGIATAN END --> */}

          {/* <!--KITAB START--> */}
          <Kitab />
          {/* <!--KITAB END--> */}

          {/* <!--EKSTRAKULIKULER START--> */}
          <Ekstrakulikuler />
          {/* <!-- EKSTRAKULIKULER END --> */}
        </div>
      </section>
    );
  }
}

export default Kurikulum;
