import React, { useState } from "react";
import "./App.css";
import svgOk from "./assets/img/Trazado9638.svg";
import { Button, Container, Modal } from "react-bootstrap";
import NavbarComponent from "./components/navbar";
import ProductsList from "./pages/productsList";
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";

function App() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const childToParent = (childdata) => {
    setData(childdata);
  };
  var arrModules = [
    { id: 1, name: "Inicio", icon: "fas fa-home", active: false },
    { id: 2, name: "Clientes", icon: "fas fa-users", active: false },
    { id: 3, name: "Ventas", icon: "fas fa-shopping-basket", active: true },
    { id: 4, name: "Compras", icon: "fas fa-clipboard-list", active: false },
    { id: 5, name: "Caja", icon: "fas fa-cash-register", active: false },
    { id: 6, name: "Inventario", icon: "fas fa-boxes", active: false },
    { id: 7, name: "Productos", icon: "fas fa-tag", active: false },
    { id: 8, name: "Reportes", icon: "fas fa-file-chart-pie", active: false },
  ];
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <AsideLeft arrModules={arrModules}></AsideLeft>
      <Container>
        <div className="row">
          <div className="col-md-12">
            <ProductsList childToParent={childToParent}></ProductsList>
          </div>
        </div>
      </Container>
      <AsideRight data={data} handleShow={handleShow}></AsideRight>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="d-flex flex-column flex-wrap align-items-center justify-content-around px-5">
          <h4 className="text-modal">¡Super! Venta Realizada</h4>
          <div className="content-status d-flex flex-row flex-wrap align-items-center justify-content-center">
            <img src={svgOk} className="icon-status" alt="" />
          </div>
          <small className="text-center">
            El comprobante de venta se envió al número <br /> de WhatsApp del cliente.
          </small>
          <Button variant="danger" className="btn btn-danger btnColor btn-block" onClick={handleClose}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
