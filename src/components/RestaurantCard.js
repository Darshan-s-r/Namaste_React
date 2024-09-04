import React,{useState} from 'react'
import RestaurantItemCard from './RestaurantItemCard';

export default function RestaurantCard({item, showItem, setShowItem}) {
  const {title, itemCards} = item?.card?.card;
  const handleOnClick = ()=>{
    showItem === title ? setShowItem(null) : setShowItem(title) 
  }
  return (
    <div className="my-1 border-slate-200 border-b-8 ">
      
      <div className="my-5 flex justify-between mx-3 cursor-pointer" onClick={handleOnClick}>
      <p className="font-bold text-xl">{title} ({itemCards.length})</p>
      <p>⬇️</p>
      </div>
          {itemCards.map((item)=>{
            return (
              showItem === title && <RestaurantItemCard key={item.card.info.id} item={item} />
            )
          })}
    
    </div>
  )
}
