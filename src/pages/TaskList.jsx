import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import TaskRow from '../Components/TaskRow'
function TaskList() {

  const {tasks} = useContext(GlobalContext)
  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState(1)
  const icon = sortOrder=== 1? " ⬆" : "⬇"

  const handleSort = (campo)=>{
    // console.log(campo)
         if(sortBy===campo)
          setSortOrder(prev=>prev*-1)
  else {
      setSortBy(campo) 
      setSortOrder(1)
  }
  }
  return (
    <div className='w-fit m-auto mt-20  p-20 rounded-2xl border-stone-800 border border-b-8 border-r-5 '>
    
            <table >
                        <thead className='border w-fit m-auto cursor-pointer '>
                                  <tr className='bg-amber-100 '>
                                          <th onClick={() => handleSort("title")}>
                                              Nome {sortBy ==="title" ? icon :""}
                                        </th>
                                          <th onClick={() => handleSort("status")}>
                                              Stato {sortBy === "status" ? icon : ""}
                                          </th>
                                        <div className='flex justify-center gap-1'>
                                            <th onClick={() =>  handleSort("createdAt")} > 
                                              Data di Creazione 
                                           </th>
                                            {sortBy === "createdAt" ? icon : ""}
                                        </div>
                                        
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
