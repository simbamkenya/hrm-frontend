import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add, updateEvent } from '../store/features/events'
import axios from 'axios'

function AddEventForm({ onClose, isVisible, selectedEvent }) {
  const dispatch = useDispatch()

  const initialState = {
    duration: '',
    eventName: '',
    location: '',
    eventDate: '',
    eventTime: '',
  }

  const [eventData, setEventData] = useState(initialState)

  console.log('formdata', eventData)

  useEffect(() => {
    setEventData(selectedEvent)
  }, [selectedEvent])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEventData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/events', eventData)
    dispatch(add(eventData))
  }

  const handleUpdate = async (e) => {
    console.log('updateEvent', eventData)
    e.preventDefault()
    dispatch(
      updateEvent({
        url: `/events/${eventData._id}`,
        method: 'put',
        data: eventData,
        onSuccess: 'events/updateEvent',
        headers: { 'Content-Type': 'application/json' },
      })
    )

    try {
      await axios.put(
        `http://localhost:3000/events/${eventData._id}`,
        eventData
      )
    } catch (e) {
      console.error(e)
    }

    onClose(false)
  }
  return (
    <div
      style={{ visibility: !isVisible ? 'hidden' : 'visible' }}
      className="bg-green-500 border-red-500 fixed top-0 left-0 right-20 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full mx-auto py-12">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Add Event
            </h3>
            <button
              type="button"
              onClick={() => onClose(false)}
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
                    Event Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Event Name"
                    value={eventData.eventName}
                    name="eventName"
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
                    Event Date
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    onChange={handleInputChange}
                    value={eventData.eventDate}
                    name="eventDate"
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="Event Date"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Event Time
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    onChange={handleInputChange}
                    value={eventData.eventTime}
                    name="eventTime"
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="Event Time"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Duration
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    onChange={handleInputChange}
                    value={eventData.duration}
                    name="duration"
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="Duration"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Location
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    onChange={handleInputChange}
                    value={eventData.location}
                    name="location"
                    class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="text"
                    placeholder="Location"
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
              form="addEvent"
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

export default AddEventForm
