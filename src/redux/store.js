import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
// createSlice
//Without slice
export const increment = createAction('counterValue/increment');
export const decrement = createAction('counterValue/decrement');


const reducer = createReducer(0, {
    [increment]: (state, action) => state + action.payload,
    [decrement]: (state, action) => state - action.payload
})

export const store = configureStore({
    reducer: {counterValue: reducer},
});

//With slice
