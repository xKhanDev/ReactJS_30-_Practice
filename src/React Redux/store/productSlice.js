import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// Enums is not supported by javascript but we can create at like this
export const STATUSES = Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        setProduct(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
}) 


export const {setProduct,setStatus} = productSlice.actions;
export default productSlice.reducer;


// Thunks
// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch,getStatus){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data =await res.json();
//             dispatch(setProduct(data))
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }

// More abstracted thunk by redux toolkit
export const fetchProducts = createAsyncThunk('product/fetchProducts',async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data =await res.json();
    return data;
})

