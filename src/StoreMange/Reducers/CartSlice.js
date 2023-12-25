import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState= {
    AddedProducts : []
}

const CartSlice = createSlice({
    name:"CartReducer",
    initialState,
    reducers:{
        AddProduct:(state, action)=>{
           const Product={
            Id: nanoid(),
            Name: action.payload.Name,
            Price: action.payload.Price
           }
           state.AddedProducts.push(Product);
        },

        RemoveProduct:(state,action)=>{
            state.AddedProducts = state.AddedProducts.filter((product)=> product.Id !== action.payload.Id);
        }
    }

})

export const {AddProduct, RemoveProduct} = CartSlice.actions;
export default CartSlice.reducer;  