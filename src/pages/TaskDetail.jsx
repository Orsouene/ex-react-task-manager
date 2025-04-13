import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../Context/GlobalContext"

function TaskDetail() {
   const { tasks } = useContext(GlobalContext) 
   const { id } = useParams()
   // console.log(id)
   const myId = parseInt(id)
   const selectedTask = tasks.find(el => el.id === myId)
   //   console.log("selectedTask",selectedTask)
   //   console.log("myId",myId)
//   console.log(tasks)
  
   return (
      
        selectedTask ?  
          <div className='w-fit m-auto mt-10'>
            <p> {selectedTask.title} </p>
            <p> {selectedTask.description} </p>
            <p> {selectedTask.status} </p>
            <p> {selectedTask.createdAt} </p>
            <button onClick={() => console.log("Delete  task with id ",selectedTask.id)} className='border p-1 cursor-pointer'>Delete Task</button>
      </div> :<p> Nessun Task Trovato </p>
      
   )
   
 



}

export default TaskDetail
