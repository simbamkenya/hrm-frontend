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
        },
        add: (state, action) => {
            state.projects.push({
                projectName: action.payload.projectName,
                hours: action.payload.hours,
                dateDue: action.payload.dateDue,
                client: action.payload.client,
            })
        }
    }
});

const { actions, reducer } = projectSlice;
export const { add, projectsReceived } = actions;
export default reducer;
