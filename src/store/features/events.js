import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        loading: false
    },
    reducers: {
        eventsReceived: (state, action) => {
            console.log('events receivved')
            state.events = action.payload;
        },
        add: (state, action) => {
            
        }
    }
})


const { actions, reducer } = eventSlice;

export const { add, eventsReceived } = actions;
export default reducer;


