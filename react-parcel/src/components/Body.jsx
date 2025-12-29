import Card from "./RestoCard";
import resobj from "../utility/constants";
import { useState } from "react";

let Body = () => {


  const [listOfResturants, setListOfResturants]= useState(resobj);

  return (
    <div className="body">
     <h1>Pizza</h1>
      <h3>Cheesilicious pizzas to make every day extraordinary.</h3>
      <h5>Restaurants to explore</h5>
      <div>
      <button 
      onClick={()=>{
        let filterData=listOfResturants.filter((restaurant)=>
        restaurant.card.card.info.avgRating >= 4.5  
        )
        setListOfResturants(filterData);
        console.log(filterData);
        
        
      }}
      
      >Top Rated</button>
      </div>
      <div className="food-items">
        {listOfResturants.map((restaurant) => (
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