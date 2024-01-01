import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => {
                return (
                    <div className={classes["cart-item"]}>
                        <li key={item.id}>{item.name}</li>
                        <span>Quantity: {item.quantity}</span>
                    </div>
                );
            })}
        </ul>
    );
    const cartCloseHandler = () => {
        props.cartStatusHandler();
    };
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={cartCloseHandler}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};
export default Cart;
