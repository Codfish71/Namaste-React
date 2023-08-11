import Restaurant from "./Restaurant";
import restaurantData from "../utils/mockData";

const RestaurantSection = () => {
    return (
      <div className="restaurant-section">
        {restaurantData.map((restaurant) => (
          <Restaurant resData={restaurant} />
        ))}
      </div>
    );
  };

export default RestaurantSection;