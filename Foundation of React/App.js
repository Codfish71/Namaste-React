import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1>Title of the page</h1>;

const Heading = () => {
  return (
    <div className="container">
      <h2 className="brand">Brand</h2>
      <input
        type="text"
        placeholder="Enter any keyword"
        className="searchbar"
      />
      <img
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
        className="profilePic"
      />
    </div>
  );
};

root.render(<Heading />);
