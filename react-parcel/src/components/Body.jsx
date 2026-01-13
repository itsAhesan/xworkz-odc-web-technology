import { useEffect, useState } from "react";
import Card from "./RestoCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=80475&offset=0&page_type=null"
      );

      const json = await response.json();

      const restaurants =
        json?.data?.cards
          ?.find(
            (card) =>
              card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
          ?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfResturants(restaurants || []);
      setFilteredRestaurants(restaurants || []);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  if (filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <h1>Pizza</h1>
      <h3>Cheesilicious pizzas to make every day extraordinary.</h3>
      <h5>Restaurants to explore</h5>

      {/* Search Section */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={() => {
            const filteredData = listOfResturants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>

      {/* Filter Section */}
      <button
        onClick={() => {
          const filteredData = listOfResturants.filter(
            (restaurant) => restaurant.info.avgRating >= 4.5
          );
          setFilteredRestaurants(filteredData);
        }}
      >
        Top Rated
      </button>

      {/* Restaurants List */}
      <div className="food-items">
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} resobj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
