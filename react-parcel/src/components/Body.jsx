import { useEffect, useState } from "react";
import Card from "./RestoCard";

let Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=80475&offset=0&page_type=null"
      );

      const json = await response.json();

      // ✅ CORRECT DATA EXTRACTION
      const restaurants =
        json?.data?.cards
          ?.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfResturants(restaurants || []);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  return (
    <div className="body">
      <h1>Pizza</h1>
      <h3>Cheesilicious pizzas to make every day extraordinary.</h3>
      <h5>Restaurants to explore</h5>

      <button
        onClick={() => {
          const filteredData = listOfResturants.filter(
            (restaurant) =>
              restaurant.info.avgRating >= 4.5
          );
          setListOfResturants(filteredData);
        }}
      >
        Top Rated
      </button>

      <div className="food-items">
        {listOfResturants.map((restaurant) => (
          <Card
            key={restaurant.info.id}
            resobj={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
