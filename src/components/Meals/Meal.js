import classes from "./Meal.module.css";
const Meals = (props) => {
    const meal = props.mealData;
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
                            id='amount'
                            type='number'
                            placeholder='Enter Quantity'
                        />
                    </div>
                    <button>Add</button>
                </div>
            </div>
            <hr />
        </>
    );
};
export default Meals;
