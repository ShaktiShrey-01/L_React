import { createSlice } from '@reduxjs/toolkit'

export const themeslice=createSlice({
    name:'theme',
    initialState:{
        value:"bg-red-500"
    },
    reducers:{
        changeTheme:(state)=>{
            if(state.value==="bg-red-500"){
                state.value="bg-blue-500"
            }
            else{
                state.value="bg-red-500"
            }
        }
    }
})

export const { changeTheme } = themeslice.actions
export default themeslice.reducer