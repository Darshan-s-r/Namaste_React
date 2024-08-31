import {RESTAURANT_URL, URL_END} from "../utils/constants"
import {useState, useEffect} from "react"
const useRestaurantMenu = (resId)=>{
  const [resInfo, setResInfo] = useState(null);
  useEffect(()=>{
    fetchData();
  }, [])

  async function fetchData(){
    try{
      const data = await fetch(RESTAURANT_URL+resId+URL_END)
      const jsonData = await data.json();
  
      setResInfo(jsonData.data);
    }catch(err){
      console.log(err)
    }
   
  }

  return resInfo;
}

export default useRestaurantMenu;