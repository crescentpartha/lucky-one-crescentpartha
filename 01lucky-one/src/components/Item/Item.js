import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Item.css';

const Item = (props) => {
    // console.log(props.carts);
    const {picture, name} = props.carts;
    return (
        <div className='selected-cart'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon className='selected-cart-icon' icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Item;