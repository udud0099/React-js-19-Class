import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodData }) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </>
  );
}
