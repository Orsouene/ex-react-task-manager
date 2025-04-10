import React from 'react'

function TaskRow({task}) {
  return (
      <tr className='border text-center h-12 ' >
          <td className='w-62  bg-amber-50 '>{task.title}</td>
          <td className='w-62  bg-amber-100' style={{ color: task.status === "To do" ? "red" : task.status === "Doing" ?  "yellow" : "green" }}> <span className='bg-stone-800 text-sm p-2 border-2  border-white rounded-2xl'>{task.status}</span> </td>
          <td className='w-62  bg-amber-50'> {task.createdAt}</td>
      </tr>
  )
}

export default TaskRow
