import classes from "./Meal.module.css";
const Meals = (props) => {
    const meal = props.mealData;
    return (
        <>
            <div className={classes.meal}>
                <p className={classes.name}>{meal.name}</p>
                <p>
                    <i>{meal.description}</i>
                </p>
                <p className={classes.price}> ${meal.price} </p>
            </div>
            <hr />
        </>
    );
};
export default Meals;
