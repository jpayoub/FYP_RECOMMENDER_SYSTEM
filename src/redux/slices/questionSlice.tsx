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
    question17:number,
    Maths: string,
    Physics: string,
    Chemistry: string,
    Biology: string,
    Economics: string,
    Sociology: string,
    History: string,
    Geography: string,
    Literature: string,



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
    question17:1,
    Maths: '10',
    Physics: '10',
    Chemistry: '10',
    Biology: '10',
    Economics: '10',
    Sociology: '10',
    History: '10',
    Geography: '10',
    Literature: '10',
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
        updateQuestion17: (state, action: PayloadAction<number>) => {
            state.question17 = action.payload;
        },
        updateMaths: (state, action: PayloadAction<string>) => {
            state.Maths = action.payload;
        },
        updatePhysics: (state, action: PayloadAction<string>) => {
            state.Physics = action.payload;
        },
        updateChemistry: (state, action: PayloadAction<string>) => {
            state.Chemistry = action.payload;
        },
        updateBiology: (state, action: PayloadAction<string>) => {
            state.Biology = action.payload;
        },
        updateEconomics: (state, action: PayloadAction<string>) => {
            state.Economics = action.payload;
        },
        updateSociology: (state, action: PayloadAction<string>) => {
            state.Sociology = action.payload;
        },
        updateHistory: (state, action: PayloadAction<string>) => {
            state.History = action.payload;
        },
        updateGeography: (state, action: PayloadAction<string>) => {
            state.Geography = action.payload;
        },
        updateLiterature: (state, action: PayloadAction<string>) => {
            state.Literature = action.payload;
        },
    }
});

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

