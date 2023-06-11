import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dailyIntake from "../waterCounter/slice";
import humanData from "../humanData/slice";

const appReducer = combineReducers({
    dailyIntake,
    humanData,
})



const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_WATER_COUNTER') {
        return {
            ...state,
            dailyIntake: undefined
        };
    }

    return appReducer(state, action)
}
const loadStateFromLocalStorage = () => {
    try {
        const stateInJSON = localStorage.getItem('reduxState');
        if (stateInJSON === null) {
            return undefined;
        } else {
            return JSON.parse(stateInJSON)
        }

    } catch (err) {
        return undefined;
    }
}

const saveStateToLocalStorage = (state) => {
    const stateInJSON = JSON.stringify(state)
    localStorage.setItem('reduxState', stateInJSON)
}

const preloadedStateFromLocalStorage = loadStateFromLocalStorage()



const store = configureStore({
    reducer: rootReducer,
    preloadedState: preloadedStateFromLocalStorage,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
// console.log(store.getState())

store.subscribe(() => {
    saveStateToLocalStorage(store.getState())
})
export default store;