import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import CardItem from "../components/cardItem";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return "Error getting users list";
        }
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  return (
    <>
      <Navbar fixed="top" className="justify-content-center content-bar-search bg-white">
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
      <div className="d-flex flex-row flex-wrap py-3 px-5 mx-3 content-items">
        {isError ? (
          <h3> Ups! hubo un error al cargar los productos</h3>
        ) : (
          <>
            {products.map((item) => (
              <CardItem key={item.id} itemTitle={item.title} imgProduct={item.image}></CardItem>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ProductsList;
