import React from 'react';
import './MyProduct.css'
import Car from './6.png'

const MyProducts = () => {
    return (
        <div className='card'>
        <div style={{textAlign:'center'}}>
            <img src={Car} width={150} alt="" />
        </div>
            <h3>My Products</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, sequi.</p>
        </div>
    );
}

export default MyProducts;
