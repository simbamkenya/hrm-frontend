import { createSlice } from '@reduxjs/toolkit';

// const API_URL = "http://localhost:3000/employees";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [        
        ]
    },
    reducers: {
        employeesReceived: (state, action) => {
            state.employees = action.payload;
        }, 
        add: (state, action) => {
            state.employees.push({
                firstName: action.payload.firstName,
                email: action.payload.email,
                lastName: action.payload.lastName,
            })
        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter((employee) => employee._id !== action.payload._id)
        },
        updateEmployee: (state, action) => {
            console.log('update', action)
            // state.employees = state.employees.map(employee => employee._id === action.payload._id ? {
            //     firstName: action.payload.firstName,
            //     email: action.payload.email,
            //     lastName: action.payload.lastName,
            //  } : employee)
        },
        fetchEmployee: (state, action) => {
            console.log('single', action)
        }
       
    }
});

// console.log('namespace', employeeSlice.actions.employeesReceived())


const { actions, reducer } = employeeSlice;
export const { add, deleteEmployee, updateEmployee, employeesReceived, fetchEmployee } = actions;
export default reducer;