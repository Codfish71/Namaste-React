import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import RestaurantSection from "./components/RestaurantSection";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1>Title of the page</h1>;

const Root = () => {
  return (
    <div className="container">
      <Header />
      <Searchbar />
      <hr />
      <h2>Restaurant List</h2>
      <RestaurantSection />
    </div>
  );
};

root.render(<Root />);
