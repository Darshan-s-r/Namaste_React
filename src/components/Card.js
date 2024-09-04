import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../utils/UserContext'
export default function Card({card}) {
  const {userName} = useContext(UserContext)
  return (
    <Link className="bg-slate-100 hover:bg-slate-200 rounded-lg m-1 p-2 w-72" to={`http://localhost:1234/restaurant/${card?.id}`}>
      <h1 className="text-xl font-bold">{card?.name}</h1>
      <p>Rating : {card?.avgRatingString}</p>
      <p>cuisines : {card?.cuisines.join(", ")}</p>
      <h1>{userName}</h1>
    </Link> 
  )
}


export const PromoteCard = (Card)=>{
    return (props)=>{
      return <div className="flex">
        <label className="absolute mt-2">🟢</label>
        <Card {...props}/>
      </div>
    }
}
