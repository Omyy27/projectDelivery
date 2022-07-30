import React from "react";
import imgProfile from "../assets/img/imagen1@2x.png";
const AsideLeft = (props) => {
  const listItems = props.arrModules.map((item) => (
    <li className="item-modules p-2" key={item.id}>
      <i className={item.icon}></i>
      <span className="ml-2">{item.name}</span>
    </li>
  ));
  return (
    <>
      <div className="aside-left">
        <div className="aside-logo-content d-flex flex-row flex-wrap align-items-center justify-content-center">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="modules p-3">
          <div className="mb-2">
            {/* <div className="p-3">
                <i class="fas fa-pencil"></i>
            </div> */}
            <img className="img-fluid" src={imgProfile} alt="" />
          </div>
          <div>
            <ul className="list-modules p-0">{listItems}</ul>
          </div>
          <div>
            <button className="btn btn-danger btnColor btn-block">Cerrar caja</button>
            <button className="btn btn-danger btnColor btn-block">Salir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideLeft;
