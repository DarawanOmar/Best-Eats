import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    foods : [],
    amount : 1,
    totalPrice : 0,
    isLoading : true,
    error : null
}

const url = "http://localhost:3500/data"
export const fetchData = createAsyncThunk('getFoods', 
    async (_,thinkAPI)=>{
        try {
            const res = await axios(url)
            return res.data
        } catch (error) {
            return thinkAPI.rejectWithValue(`${error.message}`)
        }
    }
) 



const countSlice = createSlice({
    name : 'count',
    initialState,
    reducers : {
        increment : (state ,{payload}) => {
            const food = state.foods.find(food => food.id === payload.id)
            food.count = food.count + 1;
        },
        decrement : (state , {payload}) => {
            const food = state.foods.find(food => food.id === payload.id)
            food.count = food.count - 1;
        },
        removeCard : (state,action)=>{
            const foodID = action.payload
            state.foods = state.foods.filter((food) => {
                return foodID !== food.id;
            })
        }
        ,
        totalCalculator : (state)=>{
            let amount = 0;
            let total = 0;
            state.foods.forEach((food)=> {
                amount = amount + food.count;
                total += food.price * food.count;
            })
            state.amount = amount;
            state.totalPrice = total;
        },
        favoraite : (state , action) => {
            const foodID = action.payload;
            const favoraiteFood = state.foods.find((food)=> food.id === foodID)
            favoraiteFood.favoraite = true;

        },
        unFavoraite : (state , action) => {
            const foodID = action.payload;
            const favoraiteFood = state.foods.find((food)=> food.id === foodID)
            favoraiteFood.favoraite = false;

        }
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchData.pending , (state)=>{
            state.isLoading=true

        })
        .addCase(fetchData.fulfilled,(state , action)=>{
            state.foods = action.payload;
            state.isLoading = false
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = false
            console.log(action.payload);
            state.error = action.payload

        })
    }

    
})


console.log(initialState.error);
export const {increment , decrement , totalCalculator , removeCard , favoraite , unFavoraite , filterPrice , filterType} = countSlice.actions;
export default countSlice.reducer ;