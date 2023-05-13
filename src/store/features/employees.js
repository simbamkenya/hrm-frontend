import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:3000/employees";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [
            // {
            //     name: 'Caleb',
            //     email: 'caleb@gmail.com',
            //     phone: '0877 099 787'
            // },
            // {
            //     name: 'James',
            //     email: 'james@gmail.com',
            //     phone: '0877 099 787'
            // },
            // {
            //     name: 'Ann',
            //     email: 'ann@gmail.com',
            //     phone: '0777 099 787'
            // },
        ]
    },
    reducers: {
        employeesReceived: (state, action) => {
            state.employees = action.payload;
        }, 
        add: (state, action) => {
            state.employees.push({
                name: action.payload.name,
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