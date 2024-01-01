import Meal from "./Meal";
import classes from "./MealList.module.css";
const MealList = () => {
    const Meals = [
        {
            id: "m1",
            name: "Mugalai Biriyani",
            price: 350,
            description: "Finest of the Mughals",
        },
        {
            id: "m2",
            name: "Chicken Biriyani",
            price: 250,
            description: "Finest of the Mughals",
        },
        {
            id: "m3",
            name: "Sheek Kebab",
            price: 150,
            description: "Finest of the Mughals",
        },
        {
            id: "m4",
            name: "Tangdi Kebab",
            price: 200,
            description: "Finest of the Mughals",
        },
    ];
    return (
        <div className={classes["meal-container"]}>
            {Meals.map((meal) => {
                return <Meal key={meal.id} mealData={meal}></Meal>;
            })}
        </div>
    );
};
export default MealList;
