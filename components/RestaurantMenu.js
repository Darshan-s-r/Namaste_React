import {useState, useEffect} from "react";
import {RESTAURANT_URL} from "../utils/constants"
import {useParams} from "react-router-dom"
const RrestaurantMenu = ()=>{
const {resId} = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async()=>{
    try{
      const URL = RESTAURANT_URL + resId;
      const data = await fetch(URL);
      const json = await data.json();
      console.log(json)
      setResInfo(json.data);   
    }catch(err){
      console.log(err)
    }
      
  }
  if(resInfo === null)return <h1>loading......</h1>
  // console.log(resInfo.cards[3]?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
  
  // console.log(resInfo)
  // const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card;
  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
  // console.log(itemCards)
  return (
    <div className="">
      {/* <h1>{name}</h1>
      <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
      {/* <ul>
        {itemCards.map(item => <li>{item?.card?.info.name} -RS {item?.itemCards[0]?.card?.info?.price/100} - rating {item?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.rating}</li>)}
      </ul> */}
    </div>
  )
}

export default RrestaurantMenu;

