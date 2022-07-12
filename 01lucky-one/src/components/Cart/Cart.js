import React from 'react';
import './Cart.css';
import Item from '../Item/Item';

const Cart = (props) => {
    // console.log(props.cart);
    return (
        <div className='cart'>
            <h2>Selected Tables</h2>
            {
                props.cart.map(item => <Item carts={item}></Item>)
            }
            <button className='choose-one'>CHOOSE 1 FOR ME</button>
            <button className='choose-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;