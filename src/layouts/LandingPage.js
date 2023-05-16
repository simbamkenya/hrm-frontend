import React from 'react'

function LandingPage() {
  return (
<div>
    <header>
      <nav class="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="#" class="flex items-center">
            <img src="hrm-logo.png" class="mr-3 md:h-24 md:w-24 h-12 W-12" alt="#" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TECH HRM</span>
          </a>
          <div class="flex items-center lg:order-2">
            <a href="#" class="mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">Log in</a>
            <a href="#" class="mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</a>          </div>
        </div>
      </nav>
    </header>

    <section class="min-h-screen grid place-items-center bg-gray-900 bg-cover bg-no-repeat  bg-[url('https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')]">
      <div class="mx-auto max-w-lg px-4 py-8 bg-gray-100 bg-opacity-75 rounded">
        <div class="mx-auto text-center">
          <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none dark:text-white md:text-5xl xl:text-6xl">HRM Web App</h1>
          <p class="mb-6 max-w-2xl  text-gray-800 md:text-lg lg:mb-8 lg:text-xl">Web application that manages employees details, tasks, projects and clients.</p>
          <a href="#" class="mr-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Sign up
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default LandingPage