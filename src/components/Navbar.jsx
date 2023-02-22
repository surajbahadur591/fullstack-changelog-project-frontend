import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <div className='bg-[#090D2B]'> 
    <div className='max-w-[1240] items-center md:mx-[300px] px-4 justify-between  flex h-[50px] bg-[#090D2B] text-white'>
        <h1>Logo</h1>
        <ul className='flex px-8'>
          <Link to='/signup'><li className='px-8'>Sign up</li></Link>
          <Link to='/signin'> <li className='px-8' >Sign in</li></Link>
           
        </ul>

    </div>
    </div>
  )
}

export default Navbar