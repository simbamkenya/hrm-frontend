import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as actions from '../store/features/api'
import AddEmployeesForm from './AddEmployeesForm';

function Employees() {
    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();
    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
       dispatch(actions.apiCallBegan({
        url: '/employees',
        onSuccess: 'employees/employeesReceived'
       }))

    // dispatch(actions.apiCallBegan({
    //     url: '/events',
    //     onSuccess: 'events/eventsReceived'
    //    }))    
    }, [dispatch])

    const handleChange = (e) => {
        setVisible(!isVisible)
    }
    console.log(isVisible)
  return (
    <div>
        <div id="main" className="bg-gray-100 mt-12 md:mt-2">
        <div className="min-h-full w-full bg-gray-600 text-white p-4">
        <AddEmployeesForm isVisible={isVisible} onClose={setVisible}/>
        <div className="flex py-2">
            <h1>Employees List</h1>
            {/* <!-- Modal toggle --> */}
            <button onClick={handleChange}   class=" ml-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Add Employee
            </button>
        </div>
        
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                {employees.employees.map(employee => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {employee.firstName}
                    </th>
                    <td class="px-6 py-4">
                        {employee.email}
                    </td>
                    <td class="px-6 py-4">
                        {employee.department}
                    </td>
                    <td class="px-6 py-4">
                        {employee.phone}
                    </td>
                </tr>
                ))}
                    
                </tbody>
            </table>
        </div>

        </div>
        </div>
    </div>

  )
}

export default Employees