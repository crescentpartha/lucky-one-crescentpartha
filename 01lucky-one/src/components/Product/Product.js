import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, handleToAddCart}) => {
    // console.log(props.product);
    // const {product, handleToAddCart} = props;
    const {price, name, company, picture } = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>Company: {company}</p>
            </div>
            <button onClick={() => handleToAddCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;