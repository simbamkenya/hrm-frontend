import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://localhost:3000/employees";

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [
            {
                name: 'Caleb',
                email: 'caleb@gmail.com',
                phone: '0877 099 787'
            },
            {
                name: 'James',
                email: 'james@gmail.com',
                phone: '0877 099 787'
            },
            {
                name: 'Ann',
                email: 'ann@gmail.com',
                phone: '0777 099 787'
            },
        ]
    },
    reducers: {
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
        onSuccess: (state, action) => {
            state.employees.push(action.payload)
        }, 

    }
});

export const getEmployeesAsync = (data) => async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log('res', response)
      dispatch(add(response.data));
    } catch (err) {
      throw new Error(err);
    }
  };

const { actions, reducer } = employeeSlice;
export const { add, remove } = actions;
export default reducer;