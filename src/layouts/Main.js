import React from 'react'

function Main({ employees }) {
  return (
    <section class="border-4">
        <div id="main" className="bg-gray-100 mt-12 md:mt-2 pb-24 p-8 ">
            <div className="min-h-full w-full bg-red-200 text-white">
                <h1>Employees List</h1>
                {employees.map(employee => (
                    <p>{employee.name}</p>
                ))}
            </div>
        </div>
    </section>   
  )
}

export default Main