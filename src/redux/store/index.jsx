import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dailyIntake from "../waterCounter/slice";
import humanData from "../humanData/slice";

const rootReducer = combineReducers({
    dailyIntake,
    humanData,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export default store;