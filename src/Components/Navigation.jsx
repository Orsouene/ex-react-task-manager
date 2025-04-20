import React from 'react'
import { NavLink } from 'react-router-dom'
function Navigation() {

    return (
        <div className='border-2 border-stone-800 w-72  justify-center mt-10 rounded-b-2xl px-10 border-b-4 m-auto flex gap-3 py-2 hover:bg-amber-50 text-stone-800 hover:border-[#E5BA73] transition-colors duration-1200 '>
            {/* Addtasks */}
            <NavLink to="/addtasks" className="text-2xl  hover:text-[#E5BA73] hover:font-bold w-62 transition-all duration-150 ">Add tasks </NavLink>
            {/* Tasks */}
            <NavLink to="/" className="text-2xl  hover:text-[#E5BA73]  hover:font-bold w-24  transition-all duration-150">Tasks </NavLink>

        </div>
    )
}

export default Navigation
