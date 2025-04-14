import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from "../Context/GlobalContext"
import Modal from '../Components/Modal'
function TaskDetail() {
   const navigate = useNavigate()
   //*CONTATORE
   const [redirect, setRedirect]=useState(3)
   const { tasks, removeTask } = useContext(GlobalContext) 
   const [show,setShow]=useState(false)
   const { id } = useParams()
   const myId = parseInt(id)
   const selectedTask = tasks.find(el => el.id === myId)
//*DELETE-TASK
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
//*HANDLE-SHOW
const handleShow = ()=>{
   return setShow(!show)
   }
   return (
      
        selectedTask ?  
          <div className='w-fit m-auto mt-10'>
                     <p> {selectedTask.title} </p>
                     <p> {selectedTask.description} </p>
                     <p> {selectedTask.status} </p>
                     <p> {selectedTask.createdAt} </p>
                     <button onClick={handleShow } className='border p-1 cursor-pointer'>Delete Task
                     </button>
               
                  { show ? <Modal content={"Would you like to delete    the task : "}
                              title={`${selectedTask.title} ?`}
                              onClose={handleShow}
                              onConfirm={handleDeleteButton}
                              show={show}
                              /> : null}
         </div> : 
                <p> Nessun Task Trovato,
                    <span>
                          You will be redirected to the tasks page in {redirect} sec...
                    </span>   
               </p>
      
   )
   
 



}

export default TaskDetail
