import React, { useEffect, useState } from 'react';
import Answer from '../Answer/Answer';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shops.css';

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    const handleToAddCart = (product) => {
        // console.log(product);
        setCart(product);
        // const newCart = [...carts, product];
        // console.log(setCarts);
        // console.log(newCart);
    }

    return (
        <div>
            <Header></Header>
            <div className='shops-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                        product={product}
                        handleToAddCart={handleToAddCart}
                        key={product.id}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <Answer></Answer>
            <Footer></Footer>
        </div>
    );
};

export default Shops;