import React, { useEffect, useState } from "react";
const AsideRight = (props) => {
  const [cart, setCart] = useState([]);

  function arrFilt() {
    setCart(props && props.data);
  }
  useEffect(() => {
    arrFilt();
    // var dataCart = cart;
  });
  var array = Object.keys(cart)
  .map(function(key) {
      return cart[key];
  });
  // console.log(array);

  return (
    <>
      <div className="aside-right d-flex flex-column flex-wrap">
        <div className="top-cart d-flex flex-column flex-wrap align-items-center justify-content-center">
          <div className="d-flex flex-row flex-wrap content-title-cart">
            <div className="mr-2">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h4 className="title-cart">
              Carrito <br /> de compras
            </h4>
          </div>
          <div className="subtotal-amount-content px-2">
            <div className="text-center text-inner-subtotal">
              <span>Total</span>
              <p className="mb-0 font-weight-bold">$20000</p>
            </div>
          </div>
        </div>
        <div className="list-cart-items p-3">
          <ul className="p-0">
          {/* {array.map((item) => console.log(item[0][0].title))} */}
          {array.map((item) => <li key={item[0][0].id} className="item-cart">
            <span>{item[0][0].title}</span>
            <strong>${item[0][0].price+' x'+item.length}</strong>
          </li>)}
          </ul>
        </div>
        <div className="pay-reason-content p-2 d-flex flex-column flex-wrap justify-content-around">
          <input
            type="tel"
            className="form-control formsearch"
            id="cellphone"
            placeholder="Celular"
          />
          <button className="btn btn-danger btnColor btn-block">Vender</button>
        </div>
      </div>
    </>
  );
};

export default AsideRight;
