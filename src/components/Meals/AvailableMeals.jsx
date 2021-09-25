import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german speciality!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  return (
    <section>
      <Card>
      <ul style={{ "listStyle": "none" }}>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            description={meal.description}
            name={meal.name}
            price={meal.price}
          ></MealItem>
        ))}
      </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
