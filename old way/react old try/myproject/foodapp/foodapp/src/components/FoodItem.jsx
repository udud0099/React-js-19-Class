export default function FoodItem({ food }) {
  return (
    <>
      <h1>{food.title}</h1>
      <img src={food.image} width="100px" />
      <button>View Recipe</button>
    </>
  );
}
