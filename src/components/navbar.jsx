import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar fixed="top" className="nav-shop justify-content-center">
          <div className="col-8 d-flex flex-row flex-wrap align-items-center">
            <div className="col-2 text-right text-white content-icon-back"> <i className="fas fa-angle-left"></i> </div>
            <div className="col-8 text-center text-white">
              <h1>Ventas</h1>
            </div>
          </div>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
