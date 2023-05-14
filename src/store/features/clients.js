import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: 'clients',
    initialState: {
        clients: []
    },
    reducers: {
        clientsReceived : (state, action) =>{
            console.log('clients receivved')
            state.clients = action.payload;
        },
        add: (state, action) => {
            state.clients.push({
                clientName: action.payload.clientName,
                email: action.payload.email,
                address: action.payload.address,
            })
        },
        
    }
});


const { actions, reducer } = clientSlice;
export const  { add, projectsReceived } = actions;
export default reducer;