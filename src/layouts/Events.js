import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/features/api'
import { eventsReceived } from '../store/features/events';

function Events() {
   const dispatch = useDispatch();
   const events = useSelector(state => state.events);

   console.log('events', events)

   useEffect(() => {
    dispatch(actions.apiCallBegan({
        url: '/events',
        onSuccess: 'events/eventsReceived'
    }));
   }, [ dispatch ]);

  return (
    <div>
        <h1>Events List</h1>
        {events.events.map(event => (<p>{event.eventName}</p>))}
    </div>
  )
}

export default Events