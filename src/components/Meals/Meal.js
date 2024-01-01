import React, { useRef, useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Meal.module.css";
const Meals = (props) => {
    const meal = props.mealData;
    const qunatityRef = useRef();
    const cartCtx = useContext(CartContext);
    const addItemToCartHandler = () => {
        const cartItem = {
            id: meal.id,
            name: meal.name,
            price: parseFloat(meal.price),
            quantity: parseInt(qunatityRef.current.value),
        };
        cartCtx.addItem(cartItem);
        qunatityRef.current.value = "";
    };
    return (
        <>
            <div className={classes["meal-container"]}>
                <div id={meal.id} className={classes.meal}>
                    <p className={classes.name}>{meal.name}</p>
                    <p>
                        <i>{meal.description}</i>
                    </p>
                    <p className={classes.price}> ${meal.price} </p>
                </div>
                <div className={classes["input-field"]}>
                    <div>
                        <label htmlFor='amount'>Amount: </label>
                        <input
                            ref={qunatityRef}
                            id='amount'
                            type='number'
                            placeholder='Enter Quantity'
                        />
                    </div>
                    <button onClick={addItemToCartHandler}>Add</button>
                </div>
            </div>
            <hr />
        </>
    );
};
export default Meals;
