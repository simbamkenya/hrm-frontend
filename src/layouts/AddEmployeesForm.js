import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, updateEmployee } from '../store/features/employees'
import * as actions from '../store/features/api'
import axios from 'axios'

function AddEmployeesForm({ isVisible, onClose, selectedEmployee }) {
  const dispatch = useDispatch()
  let initialState = {
    email: '',
    firstName: '',
    lastName: '',
    _id: '',
  }
  const [employeeData, setEmployeeData] = useState(initialState)
  console.log('e', employeeData._id)

  useEffect(() => {
    setEmployeeData(selectedEmployee)
  }, [selectedEmployee])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEmployeeData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    dispatch(add(employeeData))

    await axios.post('http://localhost:3000/employees', employeeData)
    setEmployeeData(initialState)
  }

  const closeModal = () => {
    onClose(false)
    setEmployeeData(initialState)
  }
  const handleUpdate = async (e) => {
    console.log('updatefun', employeeData)
    e.preventDefault()
    dispatch(
      updateEmployee({
        url: `/employees/${employeeData._id}`,
        method: 'put',
        data: employeeData,
        onSuccess: 'employees/updateEmployee',
        headers: { 'Content-Type': 'application/json' },
      })
    )

    try {
      await axios.put(
        `http://localhost:3000/employees/${employeeData._id}`,
        employeeData
      )
    } catch (e) {
      console.error(e)
    }

    onClose(false)
  }

  return (
    <div
      style={{ visibility: !isVisible ? 'hidden' : 'visible' }}
      className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full mx-auto py-12">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Add Employee
            </h3>
            <button
              type="button"
              onClick={closeModal}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div class="p-6 space-y-6">
            <form
              onSubmit={handleSubmit}
              id="addEmployee"
              class="w-full max-w-sm"
            >
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    First Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="First Name"
                    value={employeeData.firstName}
                    name="firstName"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Last Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    onChange={handleInputChange}
                    value={employeeData.lastName}
                    name="lastName"
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="last name"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Email Address
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    onChange={handleInputChange}
                    value={employeeData.email}
                    name="email"
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="email"
                  />
                </div>
              </div>
            </form>
          </div>
          {/* <!-- Modal footer --> */}
          <div class="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={handleUpdate}
              type="button"
              form="addEmployee"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
            <button
              onClick={() => onClose(false)}
              type="submit"
              form="addEmployee"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
            <button
              onClick={() => onClose(false)}
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeesForm
