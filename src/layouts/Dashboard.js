import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Dashboard() {
  return (    
    <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
    <Header />
    <main>
        <div className="flex flex-col md:flex-row">
            <Sidebar />
        </div>
    </main>
    
    
    
    </div>
    

  )
}

export default Dashboard