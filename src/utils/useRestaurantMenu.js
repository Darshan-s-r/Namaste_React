import {RESTAURANT_URL, URL_END} from "./constants"
import {useState, useEffect} from "react"
const useRestaurantMenu = (resId)=>{
  const [resInfo, setResInfo] = useState(null);
  const [resName, setResName] = useState(null);
  useEffect(()=>{
    fetchData();
  }, [])

  async function fetchData(){
    try{
      const data = await fetch(RESTAURANT_URL+resId+URL_END)
      const jsonData = await data.json();
      const items = jsonData.data?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards;
      const filteredItems = items.filter((item)=>(
        item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ))
      setResInfo(filteredItems);
      const name = jsonData.data.cards[0].card.card.text;
      setResName(name);
    }catch(err){
      console.log(err)
    }
   
  }

  return { resInfo, resName};
}

export default useRestaurantMenu;