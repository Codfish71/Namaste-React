import Restaurant from "./Restaurant";
import restaurantData from "../utils/mockData";
import { useState } from "react";

const RestaurantSection = () => {
  //Usage of hooks
  const [hookRestaurantData, setHookRestaurantData] = useState([
    {
      type: "restaurant",
      info: {
        resId: 10571,
        name: "McDonald's",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/1/10571/e68ee8b5f7c6155b237f9b53961840ca_o2_featured_v2.jpg",
        },
        cft: {
          text: "\u20b9400 for two",
        },
        cfo: {
          text: "\u20b9200 for one",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: 3.8,
          rating_text: "3.8",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "15.1K",
          subtext: "REVIEWS",
          is_new: false,
        },
      },
    },
    {
      type: "restaurant",
      info: {
        resId: 10572,
        name: "Dominos",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/1/10571/e68ee8b5f7c6155b237f9b53961840ca_o2_featured_v2.jpg",
        },
        cft: {
          text: "\u20b9400 for two",
        },
        cfo: {
          text: "\u20b9200 for one",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: 4.2,
          rating_text: "3.8",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "15.1K",
          subtext: "REVIEWS",
          is_new: false,
        },
      },
    },
    {
      type: "restaurant",
      info: {
        resId: 10573,
        name: "KFC",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/1/10571/e68ee8b5f7c6155b237f9b53961840ca_o2_featured_v2.jpg",
        },
        cft: {
          text: "\u20b9400 for two",
        },
        cfo: {
          text: "\u20b9200 for one",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: 4.5,
          rating_text: "3.8",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "15.1K",
          subtext: "REVIEWS",
          is_new: false,
        },
      },
    },
  ]);

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
