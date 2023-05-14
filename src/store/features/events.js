import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [{
            eventName: 'Dance with Pac'
        }]
    },
    reducers: {
        eventsReceived: (state, action) => {
            console.log('events receivved')
            state.events = action.payload;
        },
        addEvent: (state, action) => {

        }
    }
})


const { actions, reducer } = eventSlice;

export const { eventsReceived } = actions;
export default reducer;


