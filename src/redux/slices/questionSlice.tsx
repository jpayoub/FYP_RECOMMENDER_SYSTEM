import { createSlice,PayloadAction } from "@reduxjs/toolkit";


interface questionState {
    question1: number,
    question2: number,
    question3: number,
    question4: number,
    question5: number,
    question6: number,
    question7: number,
    question8: number,
    question9: number,
    question10: number,
    question11: number,
    question12: number,
    question13: number,
    question14: number,
    question15: number,
    question16:number,
    maths: string,
    physics: string,
    chemistry: string,
    biology: string,
    economics: string,
    Sociology: string,
    History: string,
    geography: string,
    literature: string,



}
const initialState: questionState={
    question1: 1,
    question2: 1,
    question3: 1,
    question4: 1,
    question5: 1,
    question6: 1,
    question7: 1,
    question8: 1,
    question9: 1,
    question10: 1,
    question11: 1,
    question12: 1,
    question13: 1,
    question14: 1,
    question15: 1,
    question16:1,
    maths: '10',
    physics: '10',
    chemistry: '10',
    biology: '10',
    economics: '10',
    Sociology: '10',
    History: '10',
    geography: '10',
    literature: '10',
}


export const questionSlice = createSlice ({
    name: 'questions',
    initialState,
    reducers:{
        updateQuestion1: (state, action: PayloadAction<number>) => {
            state.question1 = action.payload;
        },
        updateQuestion2: (state, action: PayloadAction<number>) => {
            state.question2 = action.payload;
        },
        updateQuestion3: (state, action: PayloadAction<number>) => {
            state.question3 = action.payload;
        },
        updateQuestion4: (state, action: PayloadAction<number>) => {
            state.question4 = action.payload;
        },
        updateQuestion5: (state, action: PayloadAction<number>) => {
            state.question5 = action.payload;
        },
        updateQuestion6: (state, action: PayloadAction<number>) => {
            state.question6 = action.payload;
        },
        updateQuestion7: (state, action: PayloadAction<number>) => {
            state.question7 = action.payload;
        },
        updateQuestion8: (state, action: PayloadAction<number>) => {
            state.question8 = action.payload;
        },
        updateQuestion9: (state, action: PayloadAction<number>) => {
            state.question9 = action.payload;
        },
        updateQuestion10: (state, action: PayloadAction<number>) => {
            state.question10 = action.payload;
        },
        updateQuestion11: (state, action: PayloadAction<number>) => {
            state.question11 = action.payload;
        },
        updateQuestion12: (state, action: PayloadAction<number>) => {
            state.question12 = action.payload;
        },
        updateQuestion13: (state, action: PayloadAction<number>) => {
            state.question13 = action.payload;
        },
        updateQuestion14: (state, action: PayloadAction<number>) => {
            state.question14 = action.payload;
        },
        updateQuestion15: (state, action: PayloadAction<number>) => {
            state.question15 = action.payload;
        },
        updateQuestion16: (state, action: PayloadAction<number>) => {
            state.question16 = action.payload;
        },
        updateMaths: (state, action: PayloadAction<string>) => {
            state.maths = action.payload;
        },
        updatePhysics: (state, action: PayloadAction<string>) => {
            state.physics = action.payload;
        },
        updateChemistry: (state, action: PayloadAction<string>) => {
            state.chemistry = action.payload;
        },
        updateBiology: (state, action: PayloadAction<string>) => {
            state.biology = action.payload;
        },
        updateEconomics: (state, action: PayloadAction<string>) => {
            state.economics = action.payload;
        },
        updateSociology: (state, action: PayloadAction<string>) => {
            state.Sociology = action.payload;
        },
        updateHistory: (state, action: PayloadAction<string>) => {
            state.History = action.payload;
        },
        updateGeography: (state, action: PayloadAction<string>) => {
            state.geography = action.payload;
        },
        updateLiterature: (state, action: PayloadAction<string>) => {
            state.literature = action.payload;
        },
    }
})

export const {
    updateQuestion1,
    updateQuestion2,
    updateQuestion3,
    updateQuestion4,
    updateQuestion5,
    updateQuestion6,
    updateQuestion7,
    updateQuestion8,
    updateQuestion9,
    updateQuestion10,
    updateQuestion11,
    updateQuestion12,
    updateQuestion13,
    updateQuestion14,
    updateQuestion15,
    updateQuestion16,
    updateMaths,
    updatePhysics,
    updateChemistry,
    updateBiology,
    updateEconomics,
    updateSociology,
    updateHistory,
    updateGeography,
    updateLiterature,
  } = questionSlice.actions;
  export default questionSlice.reducer;

