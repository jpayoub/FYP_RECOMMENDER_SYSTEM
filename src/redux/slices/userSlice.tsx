import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface userState {
    pageNb: number,
    isLoggedIn: boolean
}
const initialState: userState={
    pageNb:0,
    isLoggedIn:false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        updatePageNb: (state, action: PayloadAction<number>) => {
            state.pageNb = action.payload;
        },
        
        login: state=>{
            state.isLoggedIn = true
        }
    }
})
export const {updatePageNb,login} = userSlice.actions;
export default userSlice.reducer;