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
                phone: action.payload.phone,
            })
        },
        remove: (state, action) => {
            // state.employees.filter(employee.name ==! a)
        },
       
    }
});

// console.log('namespace', employeeSlice.actions.employeesReceived())


const { actions, reducer } = employeeSlice;
export const { add, remove, employeesReceived } = actions;
export default reducer;