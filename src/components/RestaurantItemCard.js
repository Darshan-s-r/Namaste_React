import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

export default function RestaurantItemCard({item}) {
  const dispatch = useDispatch(item)
  const handleAddItem = ()=>{
      dispatch(addItem(item));
  }
  return (
    <div className="m-2 border-gray-200 border-b-2 flex">
      <div className="w-10/12">
      <p className="font-semibold">{item.card?.info?.name}</p>
      <p className="font-semibold">₹ {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</p>
      <p>{item.card?.info?.description}</p>
      </div>
      <div className="w-2/12">
<button className="m-auto bg-black text-white px-3 rounded-lg mt-4" onClick={()=>handleAddItem(item)}>add</button>
      </div>
    </div> 
  )
}
