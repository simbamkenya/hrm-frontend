import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/features/employees'



function Dashboard() {
    const employees = useSelector(state => state);
    const dispatch = useDispatch();

    const action = {
        type: 'apiCallBegan',
        payload: {
            url: '/employees',
            data: {},
            onSuccess: 'bugsReceived',
            onError: 'bugsRequestFailed',
        },
    }

    useEffect(() => {
       dispatch(action)

    //    dispatch(add({
    //     name: "Shwawn1",
    //     email: "shawnb@gmail.com",
    //     phone: "0878 099 787"             
    //    })) 
    }, [])
    
    console.log(employees)

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