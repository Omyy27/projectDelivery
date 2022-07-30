import "./App.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/navbar";
import ProductsList from "./pages/productsList";
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";

function App() {
  var arrModules = [
    { id: 1, name: "Inicio", icon: 'fas fa-home', active:  false},
    { id: 2, name: "Clientes", icon: 'fas fa-users', active:  false},
    { id: 3, name: "Ventas", icon: 'fas fa-shopping-basket', active: true },
    { id: 4, name: "Compras", icon: 'fas fa-clipboard-list', active: false },
    { id: 5, name: "Caja", icon: 'fas fa-cash-register', active: false },
    { id: 6, name: "Inventario", icon: 'fas fa-boxes', active: false },
    { id: 7, name: "Productos", icon: 'fas fa-tag', active: false },
    { id: 8, name: "Reportes", icon: 'fas fa-file-chart-pie', active: false },
  ];
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <AsideLeft arrModules={arrModules}></AsideLeft>
      <Container>
        <div className="row">
          <div className="col-md-12">
            <ProductsList></ProductsList>
          </div>
        </div>
      </Container>
      <AsideRight></AsideRight>
    </div>
  );
}

export default App;
