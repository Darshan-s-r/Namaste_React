import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

export default function Header() {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const user = useContext(UserContext);
  useEffect(()=>{
    console.log("useEffect called")
  },[btnName])
  return (
    <div className="flex justify-between p-10 bg-green-200 ">
      <h2>Online Status : {onlineStatus === true ? "🟢" : "🔴"}</h2>
      <Link to="/" className="hover:bg-green-700">home</Link>
      <Link to = "/about" className="hover:bg-green-700">about us</Link>
      <Link to="/contact" className="hover:bg-green-700">contact us</Link>
      <button className="hover:bg-green-700" onClick = {()=>{
        setBtnName(btnName === "LogIn" ? "LogOut" : "LogIn");
      }}>{btnName}</button>
      <p>{user.userName}</p>
    </div>
  )
}
