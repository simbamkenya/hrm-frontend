import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav class="flex flex-col bg-purple-900 w-64 h-screen px-4 tex-gray-900 border border-purple-900">
        <div class="flex flex-wrap mt-8">
        <div class="w-1/2">
            <img
            src="https://randomuser.me/api/portraits/women/27.jpg"
            class="mx-auto w-20 h-20 rounded-full"
            />
        </div>
        <div class="w-1/2">
            <span class="font-semibold text-white">Ava Harper</span>
            <button class="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
            Premium
            </button>
        </div>
        </div>
        <div class="mt-10 mb-4">
        <ul class="ml-4">
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
            <span>
                <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                <path
                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                ></path>
                </svg>
            </span>
            <Link to="/employees">
                <span class="ml-2">Employees</span>
            </Link>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
            <span>
                <svg
                class="fill-current h-5 w-5 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                    fill="currentColor"
                />
                <path
                    d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                    fill="currentColor"
                />
                </svg>
            </span>
            <Link to="/events">
            
                <span class="ml-2">Events</span>
            </Link>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
            <span>
                <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                <path
                    d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                        2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                        00-2-2h-1V1m-1 11h-5v5h5v-5z"
                ></path>
                </svg>
            </span>
            <Link to="/projects">
                <span class="ml-2">Projects</span>
            </Link>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
            <span>
                <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                    d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                        014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                        8-4z"
                ></path>
                </svg>
            </span>
            <a href="#">
                <span class="ml-2">Team</span>
            </a>
            </li>
            <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
            <span>
                <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
                <path
                    d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                        4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                        9v2h-4v-2h4m2-2h-8v6h8v-6z"
                ></path>
                </svg>
            </span>
            <a href="#">
                <span class="ml-2">Tasks</span>
            </a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Sidebar