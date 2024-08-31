import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RrestaurantMenu = ()=>{
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);

const items = resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards[4]?.card?.card?.itemCards
  if(resInfo === null)return <h1>loading......</h1>
  
  return (
    <div className="">
      {items.map((item)=>{
        return <div key = {item?.card?.info?.id}>
          <p>{item?.card?.info?.name}</p>
          <p>{item?.card?.info?.price/100}</p>
        </div>
      })}
    </div>
  )
}

export default RrestaurantMenu;

