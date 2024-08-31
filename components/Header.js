import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import "./header.css"
export default function Header() {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  useEffect(()=>{
    console.log("useEffect called")
  },[btnName])
  return (
    <div className="header-container">
      <h2>Online Status : {onlineStatus === true ? "🟢" : "🔴"}</h2>
      <Link to="/" className="item">home</Link>
      <Link to = "/about" className="item">about us</Link>
      <Link to="/contact" className="item">contact us</Link>
      <button onClick = {()=>{
        setBtnName(btnName === "LogIn" ? "LogOut" : "LogIn");
      }}>{btnName}</button>
    </div>
  )
}
