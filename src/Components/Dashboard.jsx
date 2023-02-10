import React from 'react'
import Calendar from './Calender'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className="flex h-screen mt-10 " style={{overflow:"hidden"}}>
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className=" w-screen  flex-1 p-6 " >
            <Calendar/>
      </div>
    </div>
  )
}

export default Dashboard