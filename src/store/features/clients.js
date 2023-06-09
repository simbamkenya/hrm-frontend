import { createSlice } from '@reduxjs/toolkit'

const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    clients: [],
  },
  reducers: {
    clientsReceived: (state, action) => {
      console.log('clients receivved')
      state.clients = action.payload
    },
    add: (state, action) => {
      state.clients.push({
        clientName: action.payload.clientName,
        email: action.payload.email,
        address: action.payload.address,
      })
    },
    deleteClient: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client._id !== action.payload._id
      )
    },
    updateClient: (state, action) => {
      state.clients = state.clients.map((client) =>
        client._id === action.payload.data._id
          ? {
              clientName: action.payload.data.clientName,
              email: action.payload.data.email,
              address: action.payload.data.address,
            }
          : client
      )
    },
  },
})

const { actions, reducer } = clientSlice
export const { add, projectsReceived, updateClient } = actions
export default reducer
