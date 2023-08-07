import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1>Title of the page</h1>;

const Heading = () => {
  return (
    <div className="container">
      {title}
      <h1>React component</h1>;
    </div>
  );
};

const Heading2 = () => <h1>This is also a react functional component</h1>;

root.render(<Heading />);
