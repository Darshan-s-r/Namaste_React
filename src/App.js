import React, {useState, useEffect, lazy, Suspense, useContext} from "react"
import ReactDOM from "react-dom/client";
import "./App.css"
import Header from "./components/Header";
import Card,{PromoteCard} from "./components/Card";
import Contact from "./components/Contact";
const root  = ReactDOM.createRoot(document.getElementById("root"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error"
import RrestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from './utils/UserContext';

const Title = ()=> <h1 className="p-5 text-xl font-bold">Namaste react</h1>

const Body = ()=>{
  const [restourents, setRestourents] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const dataJson = await data.json()
        setRestourents(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      catch(e){
        console.log(e)
      }  
      }
      fetchData();
    
       
  }, []) 

  const onlineStatus = useOnlineStatus();
  const WithPromotedCard = PromoteCard(Card);
  const {userName, setUserName} = useContext(UserContext);
  if(onlineStatus === false){
    return <h2>it's look like u are offline</h2>
  }
  return <div>
    <Title></Title>
    <div>
      <label>userName : </label>
      <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
    </div>
    <div className="flex m-5 flex-wrap">
    {restourents.map((data)=>(
      data?.info?.isOpen ? <WithPromotedCard key={data?.info?.id}  card={data?.info} /> : <Card key={data?.info?.id} card={data?.info} />))
      }
    </div>
  </div>
}

const About = lazy(()=> import("./components/About"));

const AppLayout = () =>{
  const [userName, setUserName] = useState("Darshan")
  return(
    <UserContext.Provider value={{userName : userName, setUserName:setUserName}}>
    <div>
      <Header />
      <Outlet />
    </div>
   </UserContext.Provider>
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
        element : (<Suspense fallback={<p>loading....</p>}><About /></Suspense>)
      },
      {
        path : "/contact",
        element : <Contact />
      },{
        path: "/restaurant/:resId",       // dynamic routes  {:restId} can takes any id dynamically
        element: < RrestaurantMenu />
      }
    ]
  },
 
])

root.render(<RouterProvider router={appRouter} />);

 