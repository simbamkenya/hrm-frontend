import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        projectsReceived: (state, action) => {
            console.log('project reached')
            state.projects = action.payload;
        }
    }
});

const { actions, reducer } = projectSlice;
export const { projectsReceived } = actions;
export default reducer;
