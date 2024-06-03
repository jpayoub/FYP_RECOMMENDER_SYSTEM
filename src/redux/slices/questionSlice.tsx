import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import firestore from '@react-native-firebase/firestore';
interface Question{
    question:string,
    scale:string
}
interface QuestionState {
    Maths: string,
    Biology: string,
    Chemistry: string,
    Physics: string,
    Economics: string,
    Sociology: string,
    History: string,
    Geography: string,
    Literature: string,
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
    question16: number,
    question17: number,
    result:string,
    questions:Question[],
    loading: boolean,
    error: string | null,
}

const initialState: QuestionState = {
    Maths: '10',
    Biology: '10',
    Chemistry: '10',
    Physics: '10',
    Economics: '10',
    Sociology: '10',
    History: '10',
    Geography: '10',
    Literature: '10',
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
    question16: 1,
    question17: 1,
    result:'',
    questions:[],
    loading: false,
    error: null,
};





// Async thunk to send data to backend and get the response
export const submitQuestions = createAsyncThunk(
    'questions/submitQuestions',
    async (questionState: QuestionState, thunkAPI) => {
        try {
            const response = await axios.post('https://fyp-recommender.saadnco.com/predict', {
                features: [
                    questionState.question15,
                    parseFloat(questionState.Maths),
                    parseFloat(questionState.Biology),
                    parseFloat(questionState.Chemistry),
                    parseFloat(questionState.Physics),
                    parseFloat(questionState.Economics),
                    parseFloat(questionState.Sociology),
                    parseFloat(questionState.History),
                    parseFloat(questionState.Geography),
                    parseFloat(questionState.Literature),
                    questionState.question1,
                    questionState.question2,
                    questionState.question3,
                    questionState.question4,
                    questionState.question5,
                    questionState.question6,
                    questionState.question7,
                    questionState.question8,
                    questionState.question9,
                    questionState.question10,
                    questionState.question11,
                    questionState.question12,
                    questionState.question13,
                    questionState.question14,
                    questionState.question16,
                    questionState.question17,
                ]
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Thunk to determine the category and fetch questions accordingly
export const determineAndFetchQuestions = createAsyncThunk('questions/determineAndFetchQuestions', async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { questions: QuestionState };
    const category = state.questions.result || 'general';
    console.log("catttttttttttttttttttttttttt", category);
    const response = await thunkAPI.dispatch(fetchQuestionsByCategory(category.toLowerCase()));
    return response.payload;
});

// Thunk to fetch questions by category
export const fetchQuestionsByCategory = createAsyncThunk('questions/fetchQuestionsByCategory', async (category: string, thunkAPI) => {
    try {
        const docSnap = await firestore().collection('questions').doc(category.toLowerCase()).get();
        if (docSnap.exists) {
            const data = docSnap.data();
            console.log("result hereeeeeeeee", category.toLowerCase())
            console.log('Fetched data:', data);  // Log fetched data to debug
            return data.questionsArray || data.questions;
        } else {
            throw new Error('No such document!');
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
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
            state.question17 = action.payload;
        },
        updateQuestion17: (state, action: PayloadAction<number>) => {
            state.question16 = action.payload;
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
            })
            .addCase(fetchQuestionsByCategory.pending, (state) => {
                // Handle loading state if needed
            })
            .addCase(fetchQuestionsByCategory.fulfilled, (state, action) => {
                // Handle success state and response data if needed
                console.log('question result fetch:', action.payload);
                state.questions = action.payload;
            })
            .addCase(fetchQuestionsByCategory.rejected, (state, action) => {
                // Handle error state if needed
                console.error('fetching  error fetch:', action.payload);
            })
            .addCase(determineAndFetchQuestions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(determineAndFetchQuestions.fulfilled, (state, action) => {
                state.loading = false;
                state.questions = action.payload;
            })
            .addCase(determineAndFetchQuestions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
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