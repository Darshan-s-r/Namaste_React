import React from 'react'

export default function RestaurantItemCard({item}) {
  return (
    <div className="m-2 border-gray-200 border-b-2">
      <p className="font-semibold">{item.card?.info?.name}</p>
      <p className="font-semibold">₹ {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</p>
      <p>{item.card?.info?.description}</p>
    </div>
  )
}
