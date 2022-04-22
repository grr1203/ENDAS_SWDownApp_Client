import React from "react";
import Nav from "./components/Navigator";
import Footer from "./components/Footer";

function ClientApp() {
  return (
    <div className="base">
      <Nav />
      <div>Client App Home</div>
      <Footer />
    </div>
  );
}

export default ClientApp;
