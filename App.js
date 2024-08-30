import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom/client";
import "./App.css"
import Header from "./components/Header";
import {NavBar} from "./components/NavBar";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import About from "./components/About";
import Contact from "./components/Contact";
const root  = ReactDOM.createRoot(document.getElementById("root"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error"
import RrestaurantMenu from "./components/RestaurantMenu";
const Title = ()=> <h1>Namaste react</h1>

const Body = ()=>{
  const [restourents, setRestourents] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const dataJson = await data.json()
        console.log(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestourents(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      catch(e){
        console.log(e)
      }  
      }
      fetchData();
    
       
  }, []) 
 
  return <div>
    <Title></Title>
    {<NavBar />} {/*we can allso call like this */}
    <div className="resto-container">
    {restourents.map((data)=>(  <Card key={data?.info?.id} card={data?.info} />))}
    </div>
  </div>
}
const AppLayout = () =>{
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },{
        path: "/restaurant/:restId",       // dynamic routes  {:restId} can takes any id dynamically
        element: < RrestaurantMenu />
      }
    ]
  },
 
])

root.render(<RouterProvider router={appRouter} />);

 