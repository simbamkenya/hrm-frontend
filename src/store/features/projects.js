import { createSlice } from '@reduxjs/toolkit'

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
  },
  reducers: {
    projectsReceived: (state, action) => {
      console.log('project reached')
      state.projects = action.payload
    },
    add: (state, action) => {
      state.projects.push({
        projectName: action.payload.projectName,
        hours: action.payload.hours,
        dateDue: action.payload.dateDue,
        client: action.payload.client,
      })
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload._id
      )
    },
  },
})

const { actions, reducer } = projectSlice
export const { add, projectsReceived, deleteProject } = actions
export default reducer
