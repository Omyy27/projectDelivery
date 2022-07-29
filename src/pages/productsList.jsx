import React from "react";
import { Navbar } from "react-bootstrap";

const ProductsList = () => {
  return (
    <>
      <Navbar className="justify-content-center content-bar-search">
        <div className="input-group mb-2 mr-sm-2 col-8">
          <input
            type="text"
            className="form-control formsearch"
            id="inlineFormInputGroupUsername2"
            placeholder="Buscar Producto"
          />
          <div className="input-group-append icon-input">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default ProductsList;
