import React from 'react'

const Navbar = () => {
  return (

    <div className='bg-black'> 
    <div className='max-w-[1240] items-center md:mx-[300px] px-4 justify-between  flex h-[50px] bg-black text-white'>
        <h1>Logo</h1>
        <ul className='flex px-8'>
            <li className='px-8'>Github</li>
            <li className='px-8' >Twitter</li>
        </ul>

    </div>
    </div>
  )
}

export default Navbar