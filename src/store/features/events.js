import { createSlice } from '@reduxjs/toolkit'

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    loading: false,
  },
  reducers: {
    eventsReceived: (state, action) => {
      console.log('events receivved')
      state.events = action.payload
    },
    add: (state, action) => {
      state.events.push({
        duration: action.payload.duration,
        eventName: action.payload.eventName,
        location: action.payload.location,
        eventDate: action.payload.eventDate,
        eventTime: action.payload.eventTime,
      })
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event._id !== action.payload._id
      )
    },
    updateEvent: (state, action) => {
      state.events = state.events.map((event) =>
        event._id === action.payload.data._id
          ? {
              duration: action.payload.data.duration,
              eventName: action.payload.data.eventName,
              location: action.payload.data.location,
              eventDate: action.payload.data.eventDate,
              eventTime: action.payload.data.eventTime,
            }
          : event
      )
    },
  },
})

const { actions, reducer } = eventSlice

export const { add, eventsReceived, deleteEvent, updateEvent } = actions
export default reducer
