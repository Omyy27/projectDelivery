import "./App.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/navbar";
import ProductsList from "./pages/productsList";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Container fluid>
        <div className="row">
          <div className="col-md-12">
            <ProductsList></ProductsList>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
