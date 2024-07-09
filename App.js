import React from "react"
import ReactDOM from "react-dom/client";
const root  = ReactDOM.createRoot(document.getElementById("root"));

//react element
const heading = <h1 id="heading" tabIndex="32">hey its darshan in jsx</h1>

//react component =>react component is a regular function that return the jsx
const Title = ()=> <h1>Namaste react</h1>
//allso a react component
function NavBar(){
  return (
    <h3>this is a nav bar...</h3>
  )
}
//component composition  => component inside component or nested component
const HeadingComponent = ()=>(
  <div>
    <Title></Title>
     {heading}  {/*render React element inside react component */}
    {<NavBar />} {/*we can allso call like this */}
    {NavBar()}   {/* this allso bcs it;s just a JS function in the end */}
    {function xyz(){
      return "js inside the jsx"
    }()}
    <h1>namaste react functional component</h1>
  </div>
)

// root.render(heading) //this is how to render the react element without <></>

root.render(<HeadingComponent />); //this is how to render the react component inside <></>