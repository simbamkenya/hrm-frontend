import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux'
import { add, employeesReceived, remove } from '../store/features/employees'
import * as actions from '../store/features/api'

function Dashboard() {
  
  return (    
    <div className="">
    <Header />
    <main>
        <div className="flex flex-row">
            <Sidebar />
            <Main />
        </div>
    </main> 
    </div>
  )
}

export default Dashboard