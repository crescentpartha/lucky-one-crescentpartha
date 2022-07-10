import React from 'react';
import './Shops.css';

const Shops = () => {
    return (
        <div>
            <div className='shops-header'>
                <h1>Table Chooser</h1>
                <h2>Choose 4 Tables</h2>
            </div>
            <div className='.shops-container'>
                <div className='product-container'>
                    <h2>This is Product section</h2>
                </div>
                <div className='cart-container'>
                    <h2>This is Cart section</h2>
                </div>
            </div>
        </div>
    );
};

export default Shops;