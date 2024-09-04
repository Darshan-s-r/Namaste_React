import {useParams} from "react-router-dom"
import {useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
const RrestaurantMenu = ()=>{
  
  const [showItem, setShowItem] = useState(null);
const {resId} = useParams();
const {resInfo, resName} = useRestaurantMenu(resId);

  if(resInfo === null)return <h1>loading......</h1>
  
  return ( 
    <div className="w-6/12 mx-auto">
      <p className="text-2xl text-center mt-3 font-bold">{resName}</p>
      {resInfo.map((item) => {
        return <RestaurantCard showItem={showItem} setShowItem={setShowItem} key={item?.card?.card?.title} item={item} />
      })}
    </div>
  )
}

export default RrestaurantMenu;

