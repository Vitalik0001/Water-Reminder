import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
    buttonNum: 0,
    percentages: 0,
    time: 0,
    numberFromInput: 0,
    sumFromInput: 0,
    averageIntake: 0,
    waterWidget: [],
};

const dailyIntake = createSlice({
    name: 'waterCounter',
    initialState,
    reducers: {
        incNum: (state, action) => {
            if (state.buttonNum >= 0 && state.buttonNum < 3000) {
                state.buttonNum += 50;
                state.numberFromInput = state.buttonNum;
            }
        },
        decNum: (state, action) => {
            if (state.buttonNum < 3000 && state.buttonNum > 0) {
                state.buttonNum -= 50;
                state.numberFromInput = state.buttonNum;
            }
        },
        handleChange: (state, action) => {
            state.numberFromInput = Number(action.payload);
        },
        handleChangeValue: (state, action) => {
            state.sumFromInput = state.numberFromInput + state.sumFromInput;
            state.percentages = state.sumFromInput * 100 / action.payload;
            state.averageIntake = state.sumFromInput / 2;
            state.waterWidget = [...state.waterWidget, {
                time: dayjs().format("h:mm a"),
                waterNum: state.numberFromInput,
            }]
        },
    }
});

export const { incNum, decNum, handleChange, handleChangeValue } = dailyIntake.actions;
export default dailyIntake.reducer;