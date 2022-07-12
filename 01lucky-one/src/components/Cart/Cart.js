import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const {picture, name} = props.cart;
    return (
        <div className='cart'>
            <h2>Selected Tables</h2>
            <div className='selected-cart'>
                <img src={picture} alt="" />
                <p>{name}</p>
                <FontAwesomeIcon className='selected-cart-icon' icon={faTrash}></FontAwesomeIcon>
            </div>
            <button className='choose-one'>CHOOSE 1 FOR ME</button>
            <button className='choose-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;