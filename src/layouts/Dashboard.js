import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux'
import { add, employeesReceived, remove } from '../store/features/employees'
import * as actions from '../store/features/api'



function Dashboard() {
    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(actions.apiCallBegan({
        url: '/employees',
        onSuccess: 'employees/employeesReceived'
       }))

    //    dispatch(add({
    //     name: "Shwawn1",
    //     email: "shawnb@gmail.com",
    //     phone: "0878 099 787"             
    //    })) 

      

    }, [dispatch])
    

  return (    
    <div className=" font-sans leading-normal tracking-normal mt-12">
    <Header />
    <main>
        <div className="flex flex-col md:flex-row">
            <Sidebar />
            <Main employees={ employees } />
        </div>
    </main> 
    </div>
  )
}

export default Dashboard