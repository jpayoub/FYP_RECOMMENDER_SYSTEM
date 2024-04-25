import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface userState {
    progressValue: number,
    isLoggedIn: boolean
}
const initialState: userState={
    progressValue:0,
    isLoggedIn:false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        increment: state=>{
            state.progressValue +=1; 
        },
        decrement: state =>{
            state.progressValue -=1;
        },
        login: state=>{
            state.isLoggedIn = true
        }
    }
})
export const {increment,decrement,login} = userSlice.actions;
export default userSlice.reducer;