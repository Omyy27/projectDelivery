import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import CardItem from "../components/cardItem";

const ProductsList = ({childToParent}) => {
  const [products, setProducts] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isError, setIsError] = useState(false);
  const [itemInCart, setItemInCart] = useState([]);
  const [handleCounter, setHandleCounter] = useState({});
  
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

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = products.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.title.toLowerCase().includes(inputText)
    }
})

  function reduceItems(obj, prop) {
    return obj.reduce(function (acc, item) {
      // console.log(item[0][prop]);
      let key = item[0][prop]
      if (!acc[key]) {
        acc[key] = []
      }
  
      acc[key].push(item)
      return acc
    }, {})
  
  }
  useEffect(() => {
    if (itemInCart !== []) {
      let groupItems = reduceItems(itemInCart, 'id')
      setHandleCounter(groupItems)
      
      // console.log(handleCounter);
    }
  },[itemInCart, ]);

  useEffect(() => {
    childToParent(handleCounter);
  });

  return (
    <>
      <Navbar
        fixed="top"
        className="justify-content-center content-bar-search bg-white"
      >
        <div className="input-group mb-2 mr-sm-2 col-8">
          <input
            type="text"
            className="form-control formsearch"
            id="inlineFormInputGroupUsername2"
            placeholder="Buscar Producto"
            onChange={inputHandler}
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
            {filteredData.map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                itemTitle={item.title}
                itemPrice={item.price}
                imgProduct={item.image}
                itemInCart={itemInCart}
                setItemInCart={setItemInCart}
                handleCounter={handleCounter}
                setHandleCounter={setHandleCounter}
              ></CardItem>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ProductsList;
