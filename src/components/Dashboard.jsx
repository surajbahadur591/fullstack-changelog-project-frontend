import React, { useEffect } from 'react'

const Dashboard = () => {
    const jwt = localStorage.getItem("jwtToken")

    const logoutFunction  = () => {
        localStorage.removeItem("jwtToken", "")
    }

   
  return (
    <div>
        
        {jwt}

        <button className='bg-black py-2 px-6 text-white' onClick={ ()=> { logoutFunction()}}>logout</button>
    </div>
  )
}

export default Dashboard