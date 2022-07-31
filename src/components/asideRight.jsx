import React, { useEffect, useState } from "react";
const AsideRight = (props) => {
  const [cart, setCart] = useState([]);
  const [arrCart, setArrCart] = useState([]);

  const [total, setTotal] = useState(0);

  function arrFilt() {
    setCart(props && props.data);
  }
  useEffect(() => {
    arrFilt();
    // var dataCart = cart;
  });

  useEffect(() => {
    var array = Object.keys(cart).map(function (key) {
      return cart[key];
    });
    setArrCart(array);
    var sumArr = array.map(function (item) {
      return item[0][0].price * item.length;
    });
    const sum = sumArr.reduce((partialSum, a) => partialSum + a, 0);
    setTotal(sum);
  }, [cart]);

  // console.log(sum);
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
              <p className="mb-0 font-weight-bold">${Intl.NumberFormat().format(total)}</p>
            </div>
          </div>
        </div>
        <div className="list-cart-items pt-3 pl-3 pb-3 pr-1">
          <ul className="p-0 h-100 content-cart-list">
            {/* {array.map((item) => console.log(item[0][0].title))} */}
            {arrCart.map((item) => (
              <li key={item[0][0].id} className="item-cart">
                <span>{item[0][0].title}</span>
                <br />
                <strong>${item[0][0].price + " x" + item.length}</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="pay-reason-content p-2 d-flex flex-column flex-wrap justify-content-around">
          <input
            type="tel"
            className="form-control formsearch h-auto"
            id="cellphone"
            placeholder="Celular"
          />
          <button className="btn btn-danger btnColor btn-block" onClick={props.handleShow}>Vender</button>
        </div>
      </div>
    </>
  );
};

export default AsideRight;
