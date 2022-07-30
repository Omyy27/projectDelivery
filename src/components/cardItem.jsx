import React from 'react';
// import imgProduct from '../assets/img/Imagen3@2x.png'
const CardItem = (props) => {
    return ( 
        <div className="col-md-3 mb-3">
            <div className="card-items-wd p-2 d-flex flex-column flex-wrap align-items-center justify-content-center">
                <img className='img-fluid' src={props.imgProduct} alt="" />
                <span>{props.itemTitle}</span>
            </div>
        </div>
    );
}
 
export default CardItem;