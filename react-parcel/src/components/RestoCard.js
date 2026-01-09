let Card = ({ resobj }) => {
  const info = resobj.info;

  return (
    <div className="card">
      <div className="card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            info.cloudinaryImageId
          }
          alt={info.name}
        />
      </div>

      <div className="card-details">
        <h2>{info.name}</h2>
        <h4>
          {info.avgRating} ⭐ {info.sla.slaString}
        </h4>
        <p>{info.cuisines.join(", ")}</p>
        <p>{info.locality}</p>
      </div>
    </div>
  );
};

export default Card;
