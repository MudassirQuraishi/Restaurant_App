import Meal from "./Meal";
import classes from "./MealList.module.css";
const MealList = () => {
    const Meals = [
        {
            name: "Mugalai Biriyani",
            price: 10.99,
            description: "Finest of the Mughals",
        },
        {
            name: "Mugalai Biriyani",
            price: 10.99,
            description: "Finest of the Mughals",
        },
        {
            name: "Mugalai Biriyani",
            price: 10.99,
            description: "Finest of the Mughals",
        },
    ];
    return (
        <div className={classes["meal-container"]}>
            {Meals.map((meal) => {
                return <Meal mealData={meal}></Meal>;
            })}
        </div>
    );
};
export default MealList;
