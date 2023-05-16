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
            state.events.push({
                duration: action.payload.duration,
                eventName: action.payload.eventName,
                location: action.payload.location, 
                eventDate: action.payload.eventDate,
                eventTime: action.payload.eventTime
            })
        }
    }
})


const { actions, reducer } = eventSlice;

export const { add, eventsReceived } = actions;
export default reducer;


