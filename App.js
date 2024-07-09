import React from "react"
import ReactDOM from "react-dom/client";
const root  = ReactDOM.createRoot(document.getElementById("root"));

//React.createElement => ReactElement => JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  {id : "heading"},
  "hey its darshan in jsx"
);
console.log(heading) 

//JSX (transpiled before it reches the JS) - Babel

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const JSXHeading = <h1 id="heading" tabIndex="32">hey its darshan in jsx</h1>
console.log(JSXHeading)
root.render(JSXHeading)