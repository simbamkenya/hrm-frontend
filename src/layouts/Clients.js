import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../store/features/api'
import AddClientForm from './AddClientForm'

function Clients() {
  const [isVisible, setVisible] = useState(false)

  const dispatch = useDispatch()
  const clients = useSelector((state) => state.clients)
  console.log('clients', clients)

  useEffect(() => {
    dispatch(
      actions.apiCallBegan({
        url: '/clients',
        onSuccess: 'clients/clientsReceived',
      })
    )
  }, [dispatch])

  const handleChange = (e) => {
    setVisible(!isVisible)
  }

  return (
    <div>
      <div id="main" className="bg-gray-100 mt-12 md:mt-2">
        <div className="min-h-full w-full bg-gray-600 text-white p-4">
          <AddClientForm isVisible={isVisible} onClose={setVisible} />
          <div className="flex py-2">
            <h1>Client List</h1>
            {/* <!-- Modal toggle --> */}

            <button
              onClick={handleChange}
              class=" ml-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Add Client
            </button>
          </div>

          <div class="relative overflow-x-auto rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.clients.map((client) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {client.clientName}
                    </th>
                    <td class="px-6 py-4">
                      <div className="grid grid-cols-2 divide-x max-w-[60px]">
                        <div className="flex justify-center">
                          <svg
                            className="h-4 w-4 fill-blue-700"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                            <title>
                              <g>Edit</g>
                            </title>
                          </svg>
                        </div>
                        <div className="flex justify-center">
                          <svg
                            className="h-4 w-4 fill-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                            <title>
                              <g>Delete</g>
                            </title>
                          </svg>
                        </div>
                      </div>
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

export default Clients
