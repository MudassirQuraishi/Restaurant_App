import React, { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartStatus, setCartStatus] = useState(false);
    const cartCloseHandler = (flag) => {
        setCartStatus(false);
    };
    const cartOpenHandler = () => {
        setCartStatus(true);
    };
    return (
        <>
            {cartStatus && <Cart cartStatusHandler={cartCloseHandler} />}
            <Header cartStatusHandler={cartOpenHandler} />
            <Main />
        </>
    );
}

export default App;
