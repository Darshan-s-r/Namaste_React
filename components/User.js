import {useState} from "react";

const User = ({name, location}) => {
  const [count] = useState(0);
  const [count2] = useState(1);
    return (
      <div className = "user-card">
        <h3>count : {count}</h3>
        <h3>count2 : {count2}</h3>
        <h2>name: {name}</h2>
        <h2>location : {location}</h2>
        <h2>Contact : contact@darshan.com</h2>
      </div>
    )
}

export default User;