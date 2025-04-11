import React from 'react'
const TaskRow =React.memo(({task})=> {
    console.log("Rendering TaskRow", task.id); 
  return (
      <tr className='border text-center h-12 font-bold' >
        
          <td className='w-62  bg-amber-50 '>{task.title}</td>
      <td className='w-62  bg-amber-100' style={{ backgroundColor: task.status === "To do" ? "#dc2626" : task.status === "Doing" ? "#fde047" : "#16a34a" }}> <span className='text-sm p-2 border-2  border-white rounded-2xl bg-amber-50'>{task.status}</span> </td>
          <td className='w-62  bg-amber-50 '> 
            { new Date(task.createdAt).toLocaleDateString()}</td>
      </tr>
  )}) 
  


export default TaskRow
