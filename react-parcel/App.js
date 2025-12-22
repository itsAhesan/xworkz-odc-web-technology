import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <h2>Food App</h2>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.img} width="150" />
      <h3>{data.name}</h3>
      <p>{data.cuisine}</p>
      <p>{data.location}</p>
      <p>{data.rating}</p>
    </div>
  );
};

const Body = () => {
  const restaurants = [
    {
      img: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
      name: "Burger King",
      cuisine: "Fast Food",
      location: "Indiranagar",
      rating: "4.2 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
      name: "Domino's",
      cuisine: "Pizza",
      location: "Whitefield",
      rating: "4.1 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
      name: "KFC",
      cuisine: "Fried Chicken",
      location: "MG Road",
      rating: "4.0 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg",
      name: "McDonald's",
      cuisine: "Burgers",
      location: "Electronic City",
      rating: "4.1 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/35260678/pexels-photo-35260678.jpeg",
      name: "A2B",
      cuisine: "South Indian",
      location: "Rajajinagar",
      rating: "4.3 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/35287414/pexels-photo-35287414.jpeg",
      name: "Meghana Foods",
      cuisine: "Biryani",
      location: "Koramangala",
      rating: "4.5 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg",
      name: "Empire",
      cuisine: "Multi Cuisine",
      location: "Frazer Town",
      rating: "4.2 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/19681747/pexels-photo-19681747.jpeg",
      name: "Pizza Hut",
      cuisine: "Italian",
      location: "Jayanagar",
      rating: "4.0 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/30506288/pexels-photo-30506288.jpeg",
      name: "Subway",
      cuisine: "Healthy",
      location: "BTM",
      rating: "3.9 ⭐",
    },
    {
      img: "https://images.pexels.com/photos/35260678/pexels-photo-35260678.jpeg",
      name: "Shawarma Hub",
      cuisine: "Arabian",
      location: "Central Bangalore",
      rating: "4.4 ⭐",
    },
  ];

  return (
    <div className="body">
      <h1>Restaurants</h1>

      <div className="card-container">
        {restaurants.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>© 2025 Food App</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
