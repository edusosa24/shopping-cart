import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js"
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
import Cart from "./Components/Cart.js";
import items from "./Components/ShopItems/shopItems.json";
import "./Styles/Body.css"


const RouteSwitch = () => {
  const [itemsOnCart, setItemsOnCart] = useState(0);
  const [cart, setCart] = useState([]);
  const [itemsAux, setItemsAux] = useState(0);
  const shopItems = items.cards;

  const updateItemQuantity = (pos, quantity) => {
    let updatedCart = [];
    updatedCart = cart;
    updatedCart[pos].quantity += quantity;
    return updatedCart;
  }

  const addToCart = (id, quantity, price) => {
    let i = 0;
    let cardQuantity = parseInt(document.getElementById(quantity).value);
    setItemsAux(itemsAux + 1);

    if (cart.length === 0) {
      setCart(
        cart.concat([{ id: id, quantity: cardQuantity, price: parseFloat(price) }])
      );
    } else {
      for (i; i < cart.length && id !== cart[i].id; i++);
      if (i === cart.length) {
        setCart(
          cart.concat([{ id: id, quantity: cardQuantity, price: parseFloat(price) }])
        );
      } else {
        setCart(
          updateItemQuantity(i, cardQuantity)
        );
      }
    }
    document.getElementById(quantity).value = 1;
  }

  const removeFromCart = (id, quantity) => {
    setItemsAux(itemsAux - 1);
    let i = 0;
    let cardQuantity = parseInt(document.getElementById(quantity).value);
    let updatedCart = cart;

    for (i; id !== cart[i].id; i++);
    updatedCart[i].quantity -= cardQuantity;

    if (updatedCart[i].quantity <= 0) {
      updatedCart[i].quantity = 1;
    }

    setCart(updatedCart);
    document.getElementById(quantity).value = 1;
  }

  useEffect(() => {
    const getItemsOnCart = () => {
      let items = 0;

      cart.forEach((card) => {
        items += card.quantity;
      });

      return items;
    }

    setItemsOnCart(getItemsOnCart());
    return () => { }
  }, [cart, itemsAux])


  const removeOneItem = (id) => {
    setItemsAux(itemsAux - 1);
    if (cart.length === 1) {
      emptyCart();
    } else {
      let i = 0;
      let updatedCart = [];
      for (i; i < cart.length; i++) {
        if (id !== cart[i].id) {
          updatedCart.push(cart[i]);
        }
      }
      setCart(updatedCart);
    }
  }

  const emptyCart = () => {
    setItemsAux(0);
    setCart([]);
  }

  return (
    <HashRouter>
      <Header itemsOnCart={itemsOnCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element=
          {
            <Shop
              shopItems={shopItems}
              addToCart={addToCart}
            />
          }
        />
        <Route path="cart" element=
          {
            <Cart
              cartItems={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              removeOneItem={removeOneItem}
              emptyCart={emptyCart}
            />
          }
        />
      </Routes>
    </HashRouter >

  );
}

export default RouteSwitch;