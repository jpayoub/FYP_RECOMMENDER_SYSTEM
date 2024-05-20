import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface QuestionState {
    Physical_Activity: number,
    Maths: string,
    Biology: string,
    Chemistry: string,
    Physics: string,
    Economics: string,
    Sociology: string,
    History: string,
    Geography: string,
    Literature: string,
    Practical_vs_Theoretical: number,
    Alone_vs_Team: number,
    Interest_Tech: number,
    Creative_vs_Analytical: number,
    Indoor_vs_Outdoor: number,
    Problem_Solving: number,
    Communication: number,
    Leadership: number,
    Attention_to_Detail: number,
    Organizational_Skills: number,
    Helping_Others: number,
    Making_Money: number,
    Job_Security: number,
    Innovation_Passion: number,
    Left_vs_Right_Brain: number,
    Debate: number,
    result:string
}

const initialState: QuestionState = {
    Physical_Activity: 1,
    Maths: '10',
    Biology: '10',
    Chemistry: '10',
    Physics: '10',
    Economics: '10',
    Sociology: '10',
    History: '10',
    Geography: '10',
    Literature: '10',
    Practical_vs_Theoretical: 1,
    Alone_vs_Team: 1,
    Interest_Tech: 1,
    Creative_vs_Analytical: 1,
    Indoor_vs_Outdoor: 1,
    Problem_Solving: 1,
    Communication: 1,
    Leadership: 1,
    Attention_to_Detail: 1,
    Organizational_Skills: 1,
    Helping_Others: 1,
    Making_Money: 1,
    Job_Security: 1,
    Innovation_Passion: 1,
    Left_vs_Right_Brain: 1,
    Debate: 1,
    result:''
};

// Async thunk to send data to backend and get the response
export const submitQuestions = createAsyncThunk(
    'questions/submitQuestions',
    async (questionState: QuestionState, thunkAPI) => {
        try {
            const response = await axios.post('https://recommender.qctcoin.com/predict', {
                features: [
                    questionState.Physical_Activity,
                    parseFloat(questionState.Maths),
                    parseFloat(questionState.Biology),
                    parseFloat(questionState.Chemistry),
                    parseFloat(questionState.Physics),
                    parseFloat(questionState.Economics),
                    parseFloat(questionState.Sociology),
                    parseFloat(questionState.History),
                    parseFloat(questionState.Geography),
                    parseFloat(questionState.Literature),
                    questionState.Practical_vs_Theoretical,
                    questionState.Alone_vs_Team,
                    questionState.Interest_Tech,
                    questionState.Creative_vs_Analytical,
                    questionState.Indoor_vs_Outdoor,
                    questionState.Problem_Solving,
                    questionState.Communication,
                    questionState.Leadership,
                    questionState.Attention_to_Detail,
                    questionState.Organizational_Skills,
                    questionState.Helping_Others,
                    questionState.Making_Money,
                    questionState.Job_Security,
                    questionState.Innovation_Passion,
                    questionState.Left_vs_Right_Brain,
                    questionState.Debate,
                ]
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        updateQuestion1: (state, action: PayloadAction<number>) => {
            state.Practical_vs_Theoretical = action.payload;
        },
        updateQuestion2: (state, action: PayloadAction<number>) => {
            state.Alone_vs_Team = action.payload;
        },
        updateQuestion3: (state, action: PayloadAction<number>) => {
            state.Interest_Tech = action.payload;
        },
        updateQuestion4: (state, action: PayloadAction<number>) => {
            state.Creative_vs_Analytical = action.payload;
        },
        updateQuestion5: (state, action: PayloadAction<number>) => {
            state.Indoor_vs_Outdoor = action.payload;
        },
        updateQuestion6: (state, action: PayloadAction<number>) => {
            state.Problem_Solving = action.payload;
        },
        updateQuestion7: (state, action: PayloadAction<number>) => {
            state.Communication = action.payload;
        },
        updateQuestion8: (state, action: PayloadAction<number>) => {
            state.Leadership = action.payload;
        },
        updateQuestion9: (state, action: PayloadAction<number>) => {
            state.Attention_to_Detail = action.payload;
        },
        updateQuestion10: (state, action: PayloadAction<number>) => {
            state.Organizational_Skills = action.payload;
        },
        updateQuestion11: (state, action: PayloadAction<number>) => {
            state.Helping_Others = action.payload;
        },
        updateQuestion12: (state, action: PayloadAction<number>) => {
            state.Making_Money = action.payload;
        },
        updateQuestion13: (state, action: PayloadAction<number>) => {
            state.Job_Security = action.payload;
        },
        updateQuestion14: (state, action: PayloadAction<number>) => {
            state.Innovation_Passion = action.payload;
        },
        updateQuestion15: (state, action: PayloadAction<number>) => {
            state.Physical_Activity = action.payload;
        },
        updateQuestion16: (state, action: PayloadAction<number>) => {
            state.Debate = action.payload;
        },
        updateQuestion17: (state, action: PayloadAction<number>) => {
            state.Left_vs_Right_Brain = action.payload;
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
        updateResult: (state, action: PayloadAction<string>) => {
            state.result = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitQuestions.pending, (state) => {
                // Handle loading state if needed
            })
            .addCase(submitQuestions.fulfilled, (state, action) => {
                // Handle success state and response data if needed
                console.log('Prediction result:', action.payload);
                state.result = action.payload.predicted_domain;
            })
            .addCase(submitQuestions.rejected, (state, action) => {
                // Handle error state if needed
                console.error('Prediction error:', action.payload);
            });
    },
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
    updateQuestion17,
    updateMaths,
    updatePhysics,
    updateChemistry,
    updateBiology,
    updateEconomics,
    updateSociology,
    updateHistory,
    updateGeography,
    updateLiterature,
    updateResult,
} = questionSlice.actions;

export default questionSlice.reducer;