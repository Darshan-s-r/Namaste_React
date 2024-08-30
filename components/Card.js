import React from 'react'
import "./Card.css"
export default function Card({card}) {
  return (
    <div className="container">
      <img src={"card?."}></img>
      <h1>{card?.name}</h1>
      <p>{card?.avgRatingString}</p>
      {card?.cuisines}
      {/* {
        menu.map((item)=>item)
      } */}
    </div> 
  )
}
