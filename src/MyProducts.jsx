import React from 'react';
import './MyProduct.css'

const MyProducts = ({ product }) => {
    const { name, price, img } = product;

    return (
        <div className='card'>
            <div style={{ textAlign: 'center' }}>
                <img src={img} width={150} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
}

export default MyProducts;
