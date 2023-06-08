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
    updateProject: (state, action) => {
      state.projects = state.projects.map((project) =>
        project._id === action.payload.data._id
          ? {
              projectName: action.payload.data.projectName,
              hours: action.payload.data.hours,
              dateDue: action.payload.data.dateDue,
              client: action.payload.data.client,
            }
          : project
      )
    },
  },
})

const { actions, reducer } = projectSlice
export const { add, projectsReceived, deleteProject, updateProject } = actions
export default reducer
