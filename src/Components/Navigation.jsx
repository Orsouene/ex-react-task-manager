import React from 'react'
import { NavLink } from 'react-router-dom'
function Navigation() {

    return (
        <div className='border-2 border-orange-800 w-72  justify-center mt-10 rounded-b-2xl px-10 border-b-4 m-auto flex gap-3 py-2 hover:bg-amber-50 text-[#C58940]  '>
            {/* Addtasks */}
            <NavLink to="/addtasks" className="text-2xl  hover:text-amber-600 hover:underline hover:font-bold w-62 transition-all duration-150 ">Add tasks </NavLink>
            {/* Tasks */}
            <NavLink to="/" className="text-2xl  hover:text-amber-600 hover:underline hover:font-bold w-24  transition-all duration-150">Tasks </NavLink>

        </div>
    )
}

export default Navigation
