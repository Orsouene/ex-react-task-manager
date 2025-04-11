import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import TaskRow from '../Components/TaskRow'
function TaskList() {

  const {tasks} = useContext(GlobalContext)
  // console.log(tasks)
  
  return (
    <div className='w-fit m-auto mt-20  p-20 rounded-2xl border-stone-800 border border-b-8 border-r-5 '>
    
            <table >
                        <thead className='border w-fit m-auto '>
                              <tr className='bg-amber-100'>
                                    <th>Nome</th>
                                    <th>Stato</th>
                                    <th>Data di Creazione</th>
                              </tr>
                        </thead>
                
                        <tbody className='border ' >
                            {tasks.map((task) => (  <TaskRow key={task.id} task={task}/> ))}  
                        </tbody> 
            </table> 
    
    </div>
  )
}

export default TaskList
