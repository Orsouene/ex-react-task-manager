import React from 'react'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import { useTheme } from '../Context/ThemeContext';
function Navigation() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    return (
        <>
        <section className='mx-2 '>
                <section className='flex  justify-between'>
                <div className=''></div>
             <div className='flex justify-end mt-2 w-28 '>
                       <button onClick={toggleDarkMode} className='border p-1 rounded-xl bg-amber-200 font-bold text-black cursor-pointer '  >
                            {isDarkMode ?  
                            <div className='flex '>
                             <CiLight className='opacity-20 transition-all duration-300' />  <CiDark />
                                </div> : <div className='flex'>
                                    <CiLight />  <CiDark className='opacity-20 transition-all duration-300' />
                                </div>}
                    
                </button>
             </div>
                  
            </section>
          
                <div className={` ${isDarkMode ? ` border-2 border-[#E5BA73] max-w-[600px]  justify-between mt-10 rounded-b-2xl px-10 border-b-4 m-auto flex gap-3 py-2 hover:bg-amber-50 text-[#E5BA73]
                    font-bold hover:border-[#E5BA73] transition-colors duration-1200` :` border - 2 border-stone-800 max-w-[600px]  justify-between mt-10 rounded-b-2xl px-10 border-b-4 m-auto flex gap-3 py-2 hover:bg-amber-50 text-[#E5BA73] hover:border-[#E5BA73] transition-colors duration-1200 `} `}>
            {/* Addtasks */}
            <NavLink to="/addtasks" className="text-2xl 
             hover:text-[#C58940] hover:font-bold w-62 transition-all duration-150 ">Add tasks </NavLink>
            {/* Tasks */}
                    <NavLink to="/" className="text-2xl  hover:text-[#C58940]  hover:font-bold w-24  transition-all duration-150">Tasks </NavLink>
                  

        </div>
               
        </section>
        
        </>
     
    )
}

export default Navigation
