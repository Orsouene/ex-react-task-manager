import React from 'react'

function TaskRow({task}) {
  return (
      <tr className='border ' >
          <td className='w-62 pl-9 bg-amber-50'>{task.title}</td>
          <td className='w-62 pl-25 bg-amber-100'>{task.status}</td>
          <td className='w-62 pl-9 bg-amber-50'> {task.createdAt}</td>
      </tr>
  )
}

export default TaskRow
