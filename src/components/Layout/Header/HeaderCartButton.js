import React, { useContext } from "react";
import CartIcon from "../../Icons/CarIcon";
import CartContext from "../../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberofCartItems = cartCtx.items.length;

    const cartStatusHandler = () => {
        props.cartStatusHandler();
    };
    return (
        <button className={classes.button} onClick={cartStatusHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.buttonTitle}>Your Cart</span>
            <span className={classes.badge}>{numberofCartItems}</span>
        </button>
    );
};
export default HeaderCartButton;
