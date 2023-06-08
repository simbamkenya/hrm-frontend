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
  },
})

const { actions, reducer } = clientSlice
export const { add, projectsReceived } = actions
export default reducer
