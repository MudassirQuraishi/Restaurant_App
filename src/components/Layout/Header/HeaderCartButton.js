import CartIcon from "../../Icons/CarIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
    const cartStatusHandler = () => {
        props.cartStatusHandler();
    };
    return (
        <button className={classes.button} onClick={cartStatusHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.buttonTitle}>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    );
};
export default HeaderCartButton;
