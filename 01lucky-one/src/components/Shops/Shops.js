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

    const selectedItemDelete = (props) => {
        console.log(props);
    }

    const chooseOne = () => {
        // console.log(cart);
        let choose = [];
        cart.map(one => choose.push(one.id));
        // console.log(choose);
        let randomItem = choose[Math.floor(Math.random()*choose.length)];
        // console.log(randomItem);
        for (const one of cart) {
            if (one.id === randomItem){
                alert(`You should bye → "${one.name}" item.`);
            }
        }
        // let rest = cart.filter(one => one.id !== randomItem);
        // console.log(rest);
        // setCart(rest);
    }

    const chooseAgain = () => {
        let chooseCart = [];
        setCart(chooseCart); 
    }

    let newCart = [];
    // console.log(cart);
    const handleToAddCart = (product) => {
        // console.log(cart.length);

        if (cart.length < 4) {
            if (cart) {
                let count = 0;
                for (const item of cart) {
                    if (item.id === product.id) {
                        count = 1;
                        break;
                    }
                }
                if(count === 0){
                    newCart = [...cart, product];
                    setCart(newCart);
                }
                else {
                    newCart = [...cart];
                    setCart(newCart);
                    alert("This table item is already selected");
                }
            }
            else {
                newCart = [product];
                setCart(newCart);
            }
        }
        else {
            alert("You already select 4 table items.");
        }

        // if (newCart) {
        //     newCart = [...cart, product];
        //     setCart(newCart);
        // }
        // else {
        //     newCart = [product];
        //     setCart(newCart);
        // }
    }
    // console.log(cart);

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
                    <Cart 
                    cart={cart}
                    chooseAgain={chooseAgain}
                    chooseOne={chooseOne}
                    selectedItemDelete={selectedItemDelete}
                    ></Cart>
                </div>
            </div>
            <Answer></Answer>
            <Footer></Footer>
        </div>
    );
};

export default Shops;