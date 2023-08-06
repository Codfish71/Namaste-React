const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "Hello React CDN");

const child = [
  React.createElement("h1", { id: "child" }, "I am an child tag"),
  React.createElement("h2", { id: "child2" }, "I am an H2 Tag"),
];
const parent = React.createElement("div", { id: "parent" }, child);
console.log(parent);
root.render(parent);
