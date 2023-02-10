import React from 'react'
import { Outlet } from 'react-router-dom'
import Calendar from './Calender'
import Sidebar from './Sidebar'
import Usermgt from './Usermgt'

const Dashboard = () => {
  return (
    <div className="flex h-screen mt-10 " style={{overflow:"hidden"}}>
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className=" w-screen  flex-1 p-6 " >
          <Outlet />

        </div>
    </div>
  )
}

export default Dashboard