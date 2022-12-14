import React from 'react';
import './Cart.css';
import Item from '../Item/Item';

const Cart = (props) => {
    // console.log(props.cart);
    // console.log(props.selectedItemDelete);
    return (
        <div className='cart'>
            <h2>Selected Tables</h2>
            {
                props.cart.map(item => <Item
                    carts={item}
                    selectedItemDelete={props.selectedItemDelete}
                    ></Item>)
            }
            <button onClick={() => props.chooseOne()} className='choose-one'>CHOOSE 1 FOR ME</button>
            <button onClick={() => props.chooseAgain()} className='choose-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;