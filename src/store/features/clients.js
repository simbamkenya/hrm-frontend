import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: 'clients',
    initialState: {
        clients: []
    },
    reducers: {
        projectsReceived: (state, action) =>{

        }
    }
});


const { actions, reducer } = clientSlice;
export const  { projectsReceived } = actions;
export default reducer;