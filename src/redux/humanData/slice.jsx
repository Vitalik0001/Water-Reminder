import {createSlice} from "@reduxjs/toolkit";
import _ from "lodash";
import user from "../../assets/img/profile/user.png";
import imgData from "../../data";

const initialState = {
    formData: {
        gender: "",
        username: "Username",
        name: "",
        age: "",
        weight: "",
        height: "",
        activity: "",
    },
    humanImg: user,
    bmrData: 0,
    waterBalance: 0,
};
const humanData = createSlice({
    name: 'humanData',
    initialState,
    reducers: {
        handleChange: (state, action) => {
            if (state.formData.name.includes(" ")) {
                state.formData = {
                    ...state.formData,
                    [action.payload.target?.name]: "",
                }
            } else {
                state.formData = {
                    ...state.formData,
                    [action.payload.target?.name]: action.payload.target?.value,
                }
            }
            console.log(state.formData)
        },
        getHumanImg: (state, action) => {
            let humanArray;
            if (action.payload === "male") {
                humanArray = imgData.male;
            } else {
                humanArray = imgData.female;
            }
            const randomNumber = _.shuffle(_.range(1, humanArray.length));
            state.humanImg = humanArray[_.sample(randomNumber)].url;
        },
        calculateFromData: (state, action) => {
            let numberActivity = 0;

            if (state.formData.activity === "minimal") {
                numberActivity = 1.2;
            } else if (state.formData.activity === "low") {
                numberActivity = 1.375;
            } else if (state.formData.activity === "average") {
                numberActivity = 1.55;
            } else if (state.formData.activity === "high") {
                numberActivity = 1.64;
            } else if (state.formData.activity === "very high") {
                numberActivity = 1.9;
            }

            if (state.formData.gender === "male") {
                const bmrInfoMale = (9.99 * state.formData.weight) + (6.25 * state.formData.height) - (4.92 * state.formData.age) + 5;
                state.bmrData = _.round(bmrInfoMale * numberActivity);
            } else if (state.formData.gender === "female") {
                const bmrInfoFemale = (9.99 * state.formData.weight) + (6.25 * state.formData.height) - (4.92 * state.formData.age) - 161;
                state.bmrData = _.round(bmrInfoFemale * numberActivity);
            }

            if (state.formData.gender === "male") {
                state.waterBalance = _.round(state.formData.weight * 40);
            } else if (state.formData.gender === "female") {
                state.waterBalance = _.round(state.formData.weight * 30);
            }
        },
    }
})

export const {handleChange, getHumanImg, calculateFromData} = humanData.actions;
export default humanData.reducer;