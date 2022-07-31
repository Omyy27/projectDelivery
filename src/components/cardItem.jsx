import React, {useState} from "react";
// import imgProduct from '../assets/img/Imagen3@2x.png'
const CardItem = (props) => {
    const [count, setCount] = useState(0);
  // Function is called everytime increment button is clicked
  const handlePlus = () => {
    // Counter state is incremented
    const newItem = [{id: props.id, title: props.itemTitle, price: props.itemPrice}];
    // console.log(props.handleCounter);
    props.setItemInCart([...props.itemInCart, newItem]);
    setCount(count + 1);

  };

  // Function is called everytime decrement button is clicked
  const handleMinus = () => {
    // Counter state is decremented
    if (count > 0) {
        setCount(count - 1);
    } else {
      return;
    }
  };
  return (
    <div className="col-md-3 mb-3 d-flex flex-column flex-wrap align-items-center">
      <div className="card-items-wd p-2 d-flex flex-column flex-wrap align-items-center justify-content-center mb-2">
        <img className="img-fluid" src={props.imgProduct} alt="" />
        <span>{props.itemTitle}</span>
      </div>
      <div className="btn-group w-75" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-secondary btn-g btn-left-minus"
          onClick={handleMinus}
        >
          <i className="fas fa-minus"></i>
        </button>
        <input
          type="number"
          className="form-control text-center h-auto bg-white border-0"
          value={count}
          disabled
        />
        <button
          type="button"
          className="btn btn-secondary btn-g btn-right-plus"
          onClick={handlePlus}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
