import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from "../Context/GlobalContext"
import Modal from '../Components/Modal'
import EditTaskModal from '../Components/EditTaskModal'

function TaskDetail() { 
  //* Usare le fn e le tasks dichiarate nel costum hook
   const { tasks, removeTask, updateTask } = useContext(GlobalContext) 
  //*  Navigazione verso la pagina dei tasks
   const navigate = useNavigate()
   //*CONTATORE
   const [redirect, setRedirect]=useState(3)
//* il stato  del show per il modale del delete
const [show,setShow]=useState(false)
  //* il stato  del show per il modale del update
  const [showEdit,setShowEdit]=useState(false)
  //* prendere il parametro dinamico "id" nella rotta attiva 
   const { id } = useParams()
  //*  convertire ò'id da una stringa a un number
   const myId = parseInt(id)
   //* cercare la task attuale in cui ci sono
   const selectedTask = tasks.find(el => el.id === myId)
//*funzioen per gestire il delete del task
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
//* Funzione per gestire l'update del task
  const handleUpdate = async (taskAggiornato)=>{
    try {
      await updateTask(taskAggiornato)
      setShowEdit(false)
    } catch (error) {
      alert("l'errore è ",error)
    }
   }
//*HANDLE-SHOW-delete
const handleShow = ()=>{
   return setShow(!show)
   }
  //*HANDLE-SHOW-update
  const handleShowUpdate = () => {
    console.log(showEdit)
    return setShowEdit(!showEdit)
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
         <button onClick={handleShowUpdate } className='border p-1 cursor-pointer'>Modify Task
                     </button>
   
                  { show ? <Modal content={"Would you like to delete    the task : "}
                              title={`${selectedTask.title} ?`}
                              onClose={handleShow}
                              onConfirm={handleDeleteButton}
                              show={show}
                              /> : null}
                         
                           <EditTaskModal
                              task={selectedTask}
                              show={showEdit}
                              onClose={handleShowUpdate}
                              onSave={handleUpdate}
                           />
         </div> : 
                <p> Nessun Task Trovato,
                    <span>
                          You will be redirected to the tasks page in {redirect} sec...
                    </span>   
               </p>
   

   )
   
 



}

export default TaskDetail
