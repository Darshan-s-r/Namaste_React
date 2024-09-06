import { useSelector, useDispatch} from 'react-redux';
import {clearItems, removeItem} from "../utils/cartSlice";
const Cart = () =>{
  const dispatch = useDispatch();
const cartItems = useSelector((store)=> store.cart.items);
const handleClearCart = ()=>{
    dispatch(clearItems());
}

const handleRemoveItem = (item) =>{
    dispatch(removeItem(item))
}

  return <div className="w-6/12 m-auto">
    <h1 className="text-center text-2xl font-bold">cart</h1>
    <button className = "text-center bg-black text-white my-10 px-3 rounded-lg"
    onClick = {handleClearCart}>clear cart</button>
    {cartItems.length === 0 && <h1 text-center text-2xl>go order something</h1>  }
    <div className=" border border-slate-200">
    {
      cartItems.map((item)=>{
        return  <div key = {item?.card?.info?.id} className="m-2 border-gray-200 border-b-2 flex">
        <div className="w-10/12">
        <p className="font-semibold">{item.card?.info?.name}</p>
        <p className="font-semibold">₹ {item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</p>
        <p>{item.card?.info?.description}</p>
        </div>
        <div className="w-2/12">
        <button className="m-auto bg-black text-white px-3 rounded-lg mt-4" onClick={()=>handleRemoveItem(item)}>Remove</button>
        </div>
      </div> 
      })
    }
    </div>
  </div>
}

export default Cart;
