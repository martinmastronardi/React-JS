import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
  return useContext(cartContext);
};

const CartContextProvider = ({ children }) => {
  const [totalQty, setTotalQty] = useState(0);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
      setTotalQty(cart.reduce((acc, elem) => acc + elem.qty, 0));
      setTotalPrice(cart.reduce((acc, elem) => acc + elem.precio * elem.qty, 0));
    }
  }, []);


  const addToCart = (item, qty) => {
    setTotalQty(totalQty + qty);
    setTotalPrice(totalPrice + item.precio * qty);
    let newCart = [];

    if (isInCart(item.id)) {
      newCart = cart.map((elem) => {
        if (elem.id === item.id) {
          return { ...elem, qty: elem.qty + qty };
        } else {
          return elem;
        }
      });
      setCart(newCart);
    } else {
      newCart = [...cart, { ...item, qty }];
      setCart(newCart);
    }

    setCartToLocalStorage(newCart);
  };

  const isInCart = (id) => {
    return cart.find((elem) => elem.id === id);
  };

  const removeItem = (id, precio, qty) => {
    setTotalPrice(totalPrice - precio * qty);
    setTotalQty(totalQty - qty);

    const newCart = cart.filter((elem) => elem.id !== id);

    setCart(newCart);
    setCartToLocalStorage(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotalQty(0);
    setTotalPrice(0);
    setCartToLocalStorage([]);
  };

  const setCartToLocalStorage = (cartToSave) => {
    localStorage.setItem("cart", JSON.stringify(cartToSave));
  };

  const contextValue = {
    totalQty,
    totalPrice,
    cart,
    addToCart,
    removeItem,
    clearCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;