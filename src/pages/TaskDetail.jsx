import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from "../Context/GlobalContext"

function TaskDetail() {
   const navigate = useNavigate()
   const [redirect, setRedirect]=useState(3)
   const { tasks, removeTask } = useContext(GlobalContext) 
   const { id } = useParams()
   // console.log(id)
   const myId = parseInt(id)
   const selectedTask = tasks.find(el => el.id === myId)
   //   console.log("selectedTask",selectedTask)
   //   console.log("myId",myId)
//   console.log(tasks)
  const handleDeleteButton =async() =>{
   try {
      await removeTask(selectedTask.id) 
      alert("task eliminato")
      setInterval(() => setRedirect((prev) => prev - 1),1000)
      setTimeout(()=>navigate(-1),3000)
   } catch (error) {
     alert("l'errore  : "+ error.message)
   }
  }
   return (
      
        selectedTask ?  
          <div className='w-fit m-auto mt-10'>
            <p> {selectedTask.title} </p>
            <p> {selectedTask.description} </p>
            <p> {selectedTask.status} </p>
            <p> {selectedTask.createdAt} </p>
            <button onClick={handleDeleteButton} className='border p-1 cursor-pointer'>Delete Task</button>
         </div> : <p> Nessun Task Trovato,
            <p> You will be redirected to the tasks page in {redirect} sec...</p>   </p>
      
   )
   
 



}

export default TaskDetail
