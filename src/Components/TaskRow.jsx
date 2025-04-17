import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
const TaskRow = React.memo(({ task, checked ,onToggle})=> {

    console.log("Rendering TaskRow", task.id); 
  return (
      <tr className='border text-center h-12 font-bold' >
      {/* <td className='w-62  bg-amber-50 hover:bg-stone-50 hover:bg-opacity-30 hover:cursor-pointer border-amber-100 border-r '>

        <input className='cursor-pointer    ' type='checkbox' checked={checked} onChange={() => onToggle(TaskRow.id)} />
      </td> */}
      <td className='w-62  bg-amber-50 hover:bg-stone-50 hover:bg-opacity-30 hover:cursor-pointer '> 
    
          <NavLink to={`/${task.id}`}  > 
              {task.title}  
              </NavLink> 
       
      </td>
     
      <td
        className={`w-62 bg-amber-100 ${task.status === "To do"
            ? " hover:bg-red-700"
            : task.status === "Doing"
              ?  "hover:bg-yellow-400"
              : " hover:bg-green-700"
          }`}
      >
        <span className='text-sm p-2 border-2 border-white rounded-2xl bg-amber-50'>
          {task.status}
        </span>
      </td>

          <td className='w-62  bg-amber-50 '> 
            { new Date(task.createdAt).toLocaleDateString()}</td>
      </tr>
  )}) 
  


export default TaskRow
