import React from "react";
import Nav from "./components/Navigator";
import Footer from "./components/Footer";
import "./css/screens/home.scss";

function ClientApp() {
  return (
    <div className="base">
      <Nav />
      <div>
        <img
          className="main-img"
          src={process.env.PUBLIC_URL + "/img/ENDAS_Logo.png"}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
}

export default ClientApp;
