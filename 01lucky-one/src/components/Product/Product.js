import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {id, price, name, company, picture} = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>Company: {company}</p>
            </div>
            <button>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;