import React from 'react'

function Sidebar() {
  return (
    <nav aria-label="bg-gray-800 border-4">
    <div className="bg-gray-800  shadow-xl h-20 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-48 content-center">

        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                <li className="mr-3 flex-1">
                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                        <i className="fa fa-users pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Employees</span>
                    </a>
                </li>
                <li className="mr-3 flex-1">
                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                        <i className="fa fa-list pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">Projects</span>
                    </a>
                </li>
            </ul>
        </div>


    </div>
</nav>
  )
}

export default Sidebar