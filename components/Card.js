import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
export default function Card({card}) {
  return (
    <Link to={`http://localhost:1234/restaurant/${card?.id}`} className="container">
      <img src={"card?."}></img>
      <h1>{card?.name}</h1>
      <p>{card?.avgRatingString}</p>
      {card?.cuisines}
    </Link> 
  )
}
