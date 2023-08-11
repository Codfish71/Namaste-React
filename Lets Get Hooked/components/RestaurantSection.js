import Restaurant from "./Restaurant";
import restaurantData from "../utils/mockData";
import { useState } from "react";

const RestaurantSection = () => {
  //Usage of hooks
  const [hookRestaurantData, setHookRestaurantData] = useState(restaurantData);

  return (
    <div className="container">
      <button
        onClick={() => {
          let filteredList = hookRestaurantData.filter(
            (res) => res.info.rating.aggregate_rating > 4
          );
          setHookRestaurantData(filteredList);
        }}
      >
        Most Rated restaurants
      </button>
      <div className="restaurant-section">
        {hookRestaurantData.map((restaurant) => (
          <Restaurant key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantSection;
