import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./store/cart-context";
function App() {
    const [cartStatus, setCartStatus] = useState(false);
    const cartCloseHandler = (flag) => {
        setCartStatus(false);
    };
    const cartOpenHandler = () => {
        setCartStatus(true);
    };
    return (
        <CartProvider>
            {cartStatus && <Cart cartStatusHandler={cartCloseHandler} />}
            <Header cartStatusHandler={cartOpenHandler} />
            <Main />
        </CartProvider>
    );
}

export default App;
