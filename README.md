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
```js
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
```
# optional chaining
* setRestourents(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) // this is optional chaining

# state
* state is a js value that will be changed in near feuture
* when ever the state variable changes, react trigers the reconciliation cycle (it rerenders the components)

# props
* Props in React are used for one-way communication between components, allowing parents to pass data to children. This data is immutable and read-only, meaning child components cannot modify it. Props are essential in React as they enable components to be reusable and flexible, making it easy to create complex UIs.

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
```js
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
```

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
```js
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
```

# class based components
* example  to create class component
```js
import react from "react";
import {Component} from "react";     //class UserClass extends Component{}   u can allso destructure Component when importing
class UserClass extends react.Component{
  constructor(props){
    super(props);    // hear we use super(props) to initialize the prototype chaining and to use this key word
    console.log(props);
  }
  render(){
    const {name, location} = this.props;
    return (
      <div className = "user-card">
        <h2>name: {this.props.name}</h2>
        <h2>location : {location}</h2>
        <h2>Contact : contact@darshan.com</h2>
      </div>
    )
  }
}

export default UserClass;
```

* * example  to use class component
``` js
import User from './User'
import UserClass from './UserClass'
export default function About() {
  return (
    <div>
     <p> this buetifull app is done by DARSHAN</p>
     <User name={"darshan function"} location = {"bengaluru func"}></User>
     <UserClass name={"darshan class"} location = {"bengaluru class"}/>
     <br></br>
     </div>
  )
}

```

# state and props in class based component
``` js
import react from "react";

class UserClass extends react.Component{
  constructor(props){
    super(props);    // hear we use super(props) to initialize the prototype chaining and to use this key word {we can't able to use this key word without this}
    console.log(props);

    this.state = {     // this.state is the single big objects that handle all the state variables  
      count : 0,      //these two are two diffrent state variables 
      count2 : 1,      
    }
  }
  render(){
    const {name, location} = this.props;      //destructuring props
    const {count, count2} = this.state;       //destructuring state
    return (
      <div className = "user-card">
         <h3>count : {count}</h3>
         <button onClick = {()=>{ 
          this.setState({                 //this.setState is a method used to update the state variable
            count : this.state.count + 1,
           // count2 : count2 + 1,            // can able change more than 1 state variable inside 1 setState method
          })
         }}>Increate count</button>
         <h3>count2 : {count2}</h3>
        <h2>name: {this.props.name}</h2>
        <h2>location : {location}</h2>
      </div>
    )
  }
}

export default UserClass;
```

# life cycle methods in [class component ]  
* don't compare life cycle methods to useEffect (functional components )
![life cycle method](screenShots/LifeCycleMethod.png)

* order of methods called

* -----MOUNTING-----
constructor
render(dummy)
      <HTML   dummy>
componentDidMount         // only called when component first mount
      <API call>
      <this.setState>  -> state variable is updated

-----UPDATE------          // called on every component rerenders
render (API data)
<html  new api data>
componentDidUpdate

-----UNMOUNTING-----
componentwillUnmount

//////////when multiple component///////////////

parent constructor
parent render
firstchild constructor
firstchild render
secondchild constructor
secondchild render
thirdchild constructor
thirdchild render
firstchild did mount
secondchild did mount
thirdchild did mount
parent componrnt did mount

//////////when fetching data from api////////////////
```js
import react from "react";

class UserClass extends react.Component{
  constructor(props){
    super(props);   
console.log("child contructor")
    this.state = {    
        user : {
          name : "dummy",
          email : "dummy"
        }
    }
  }
  render(){
    const {name, email} = this.state.user
    console.log(name + "render")
  return (
    <div>
      <h1>name : {name}</h1>
      <h1>email : {email}</h1>
    </div>
  )
  }

  async componentDidMount(){
    console.log( this.state.user.name +  "child did mount")
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();
    this.setState({
      user : jsonData[0]
    })

    this.timer = setInterval(()=>{
      console.log("setinterval")
    }, 1000)
  }

  //useEffect(()=>{
  // }, [user, count])       //this user dependency can be like
  componentDidUpdate(prevProps, prevState){
    if(this.state.user !== prevState.user || this.state.count !== prevState.count){   // if we have more dependency
      //do somthing
    }
    if(this.state.count !== prevState.count){
      //do somthing else
    }
    console.log(name + "componentDidUpdate")
  }
  componentWillUnmount(){
    console.log(this.state.user.name + "component willUnmount")
    // do cleanup code
    clearInterval(this.timer);
  }
}

export default UserClass;
```
parent constructor
About.js:10 parent render
UserClass.js:6 child contructor
UserClass.js:16 dummy render
UserClass.js:26 dummy child did mount
About.js:20 parent componrnt did mount
UserClass.js:16 Leanne Graham render
UserClass.js:34 componentDidUpdate
UserClass.js:37 Leanne Grahamcomponent willUnmount


# cleanup in functional component
```js
useEffect(()=>{
  const timer = setInterval(()=>{
      console.log("setInterval")
  }, 1000)

  return ()=>{   // this return inside useEffect will call when component UN MOUNTING
    clearInterval(timer)  
  }
})
```