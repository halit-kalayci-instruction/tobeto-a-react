import {combineReducers, configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({});


export const store = configureStore({
    reducer: rootReducer
});
