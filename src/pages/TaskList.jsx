import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
function TaskList() {
  const tasks = useContext(GlobalContext)
  return (
    <div className='border border-stone-200 rounded-2xl w-fit p-10 m-auto mt-10 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-stone-50 border-b-8 border-r-8'>
      {tasks.map((task) => {
        return (
          <div key={task.id} className=' min-w-80 max-w-96 border border-amber-800 p-5 rounded-2xl border-y-4 bg-amber-100 text-stone-800 '>
            <p className='text-center font-extrabold text-xl border-b border-amber-800 pb-1 rounded-r-2xl rounded-l-2xl'>task {task.id}</p>
            <p>
              <strong>Nome </strong>
              {task.title}
            </p>
            <p>
              <strong>Stato : </strong>
              {task.status}
            </p>
            <p>
              <strong> Data di Creazione : </strong>
              {task.createdAt}
            </p>

          </div>
        )

      })

      }
    </div>
  )
}

export default TaskList
