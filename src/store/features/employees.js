import { createSlice } from '@reduxjs/toolkit';

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
                phone: '0877 099 787'
            }
        ]
    },
    reducers: {
        add: (state, action) => {

        },
        remove: (state, action) => {

        }
    }
});

const { actions, reducer } = employeeSlice;
export const { add, remove } = actions;
export default reducer;