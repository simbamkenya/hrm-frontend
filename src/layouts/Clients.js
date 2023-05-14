import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/features/api';

function Clients() {
    const dispatch = useDispatch();
    const clients = useSelector(state => state.clients);
    console.log('clients', clients)

    useEffect(() => {
        dispatch(actions.apiCallBegan({
            url: '/clients',
            onSuccess: 'clients/clientsReceived'
        }))
    }, [ dispatch ])

  return (
    <div>
        <h1>Clients Api</h1>
        {clients.map(client => (
            <h1>{client.client}</h1>
        ))}
    </div>
  )
}

export default Clients