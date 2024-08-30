// Namaste React

# Parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-uses the file watching algorithm - writtern in C++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistence Hashing
-code Spliting
-Differential Bundling -support of older browsers

# example
const root  = ReactDOM.createRoot(document.getElementById("root"));

//react element
const heading = <h1 id="heading" tabIndex="32">hey its darshan in jsx</h1>

//react component =>react component is a regular function that return the jsx
const Title = ()=> <h1>Namaste react</h1>
//allso a react component

//component composition  => component inside component or nested component
const HeadingComponent = ()=>(
  <div>
    <Header />
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

#       setRestourents(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) // this is optional chaining

# state  ->state is a js value that will be changed in near feuture
* when ever the state variable changes, react trigers the reconciliation cycle (it rerenders the components)

# useState
const [name, setName] = useState("darshan");  => hear "darshan" is the initial value of the name
name -> has the value of the state
setName("somthing") -> used to update the state variable
* useState canonly be called inside the body of the functional component

* //extra -> never create useState inside condition statements (like if(), for()), functions //it works but not good prackties
# useEfffect  
useEfffect(()=>{
  console.log("useEffect called");
}, []);
* //extra => useEffect is called when component mounts no matter the dependency
* takes two arguments 1st callbackFunction   2nd is dependency array

* if no dependency array in useEffect than useEffect is called on every render
useEfffect(()=>{
  console.log("useEffect called");
});
* if dependency array is empty = [] => useEffect is called on initial render (just once, when component mountess)
useEfffect(()=>{
  console.log("useEffect called");
}, []);

* when there is a dependency mentioned inside the dependency array, In that case useEffect is called on initial render(component mounts) and on every time the dependency is updated
useEfffect(()=>{
  console.log("useEffect called, btnName changeds");
}, [btnName]);


# Routes using [react-router-dom]

* thair are two types of routing can happen in a web application
* 1] Client side routing.  -> all the pages needed for that web site is fetched in initial request[network call]
* 2] Server side routing.  -> we have to make network call for each pages
we can create the routes like these("/", "/about", "/contact") using the fetures of the react-router-dom librabry
* import { createBrowserRouter, RouterProvider } from "react-router-dom";
create BrouserRouter is used to specify the routes 
RouterProvider is used to provide this specifyes routes to the react
const appRouter = createBrowserRouter([   // hear createBrowserRouter takes the list of objects as arguments
  {
    path : "/",                      // this is the path
    element : <Body />               // this is the component that render in that path
    errorElement : <Error />         // if any error in this route this component will be shown
  },
  {
    path : "/about",
    element : <About />
  },
  {
    path : "/contact",
    element : <Contact />
  }
])

root.render(<RouterProvider router={appRouter} />);

* ////////////////////////////////////////////////////////////////
# Outlet
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// hear the Outlet is the component that provided by reat-router-dom
const AppLayout = () =>{
  return(
    <div>
      <Header />    // this  <Header /> will be applyed for all the child routes
      <Outlet />   //this <Outlrt /> component will be replaced by the specific children routes
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
        path : "/about",              //when route is "/about" this <About /> will replace the <Outlet /> component in <AppLayout /> component
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path: "/restaurant/:restId",       // dynamic routes  {:restId} can takes any id dynamically
        element: < RrestaurantMenu />
      }
    ]
  },
 
])

# useParams [react-router-dom]
used to get dynamic URL
ex : swiggy.com/restourant/1234    ( path: "/restaurant/:restId")
const params = useParams()  => params is a object with {resId : "1234"}
params.resId value will be 1234


* ////////////////////////////////////////////////////////////////
# Link   from [react-router-dom]
import {Link} from "react-router-dom"
when linking pages in react don't use <a href={}>  becouse it reloads the page
insted use <Link to="/about">about</Link>  this Link component it does not reloads the page

# UseRouteError [react-router-dom]

import { useRouteError } from "react-router-dom";
const Error = ()=>{
  const err = useRouteError();   //this gives information about all the errors in this route
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Somthing went wrong</h2>
      <h3>{err.status} {err.statusText}</h3>
    </div>
  )
}
export default Error;


# class based components