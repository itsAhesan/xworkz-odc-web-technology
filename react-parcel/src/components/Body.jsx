import Card from "./RestoCard";
import resobj from "../utility/constants";

let Body = () => {
  return (
    <div className="body">
     <h1>Pizza</h1>
      <h3>Cheesilicious pizzas to make every day extraordinary.</h3>
      <h5>Restaurants to explore</h5>

      <div className="food-items">
        {resobj.map((restaurant) => (
          <Card
            key={restaurant.card.card.info.id}
            resobj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;