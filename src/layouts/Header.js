import React from 'react'

function Header() {
  return (
    <header>
        <ul class="flex px-4 py-6 bg-slate-500">
        <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
        </li>
        <li class="mr-6">
            <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
        </li>
        </ul>
    </header>
  )
}

export default Header