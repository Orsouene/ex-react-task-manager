import React from 'react'
import { NavLink } from 'react-router-dom'
function Navigation() {

    return (
        <div className='border-2 border-amber-800 w-fit mt-10 rounded-b-2xl px-10 border-b-4 m-auto flex gap-5 py-2 hover:bg-orange-100'>
            {/* Addtasks */}
            <NavLink to="/addtasks" className="text-2xl text-stone-800 hover:text-amber-600 hover:underline">Add tasks </NavLink>
            {/* Tasks */}
            <NavLink to="/" className="text-2xl text-stone-800 hover:text-amber-600 hover:underline">Tasks </NavLink>

        </div>
    )
}

export default Navigation
