const Restaurant = (props) => {
  const { resData } = props;
  console.log(resData);
  return (
    <div className="restaurant-card">
      <img src={resData.info.image.url} className="restaurant-image" />
      <div className="first-line">
        <h3 className="restaurant-name">{resData.info.name}</h3>
        <h3 className="restaurant-rating">
          {resData.info.rating.aggregate_rating}
        </h3>
      </div>
      <div className="second-line">
        <h4 className="restaurant-avg-price">{resData.info.cft.text}</h4>
      </div>
    </div>
  );
};

export default Restaurant;
