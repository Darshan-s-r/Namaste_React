import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState : { 
    items : []
  },
  reducers : {
    addItem : (state, action) =>{
      state.items.push(action.payload)
    },
    removeItem : (state, action) =>{
      const index = state.items.findIndex((item)=>item?.card?.info?.id === action.payload.card?.info?.id);
      if(index !== -1){
        state.items.splice(index, 1);
      }
      
    }, 
    clearItems : (state) => {
      state.items.length = 0;
    }
  }
})

export default cartSlice.reducer;
export const {addItem, removeItem, clearItems} = cartSlice.actions;