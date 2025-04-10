import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'

function TaskList() {
  const tasks = useContext(GlobalContext)
  return (
    <div className='w-fit m-auto mt-20'>
    
        <table >
        <thead className='border w-fit m-auto '>
            <tr>
              <th>Nome</th>
              <th>Stato</th>
              <th>Data di Creazione</th>
            </tr>
          </thead>
        {tasks.map((task) => ( 
             <tbody key={task.id} className='border '>
            <tr >
              <td className='w-62 pl-9'>{task.title}</td>
              <td className='w-62 pl-25'>{task.status}</td>
              <td className='w-62 pl-9'> {task.createdAt}</td>
            </tr>
          </tbody>) )}
        </table> 
    
    </div>
  )
}

export default TaskList
