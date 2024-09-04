import User from './User'
import UserClass from './UserClass'
import {Component} from "react";
import UserContext from '../utils/UserContext';
export default class  About extends Component {
  constructor(){
    super();
    console.log("parent constructor")
  }
  render() {
    console.log("parent render")
   return <div>
     <p> this buetifull app is done by DARSHAN</p>
     {/* <User name={"darshan function"} location = {"bengaluru func"}></User> */}
     <UserClass name={"first"} location = {"bengaluru class"}/>
     <br></br>
     <UserContext.Consumer>
     {(user)=>{
      return <h1>{user.userName}</h1>
     }}
     </UserContext.Consumer>
     </div>
  }

  componentDidMount(){
    console.log("parent componrnt did mount")
  }
}
