import React, { useContext, useState } from 'react'
import { IoTrashBinOutline } from "react-icons/io5";
import { TfiPencilAlt } from "react-icons/tfi";
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
       <div className='w-96  m-auto mt-10  p-5 border rounded-2xl border-r-8 border-b-8  hover:border-l-8 hover:border-t-8 transition-border duration-150 bg-amber-50 border-amber-100 flex flex-col gap-2   '>
            
         <p className='border-2 border-r-4 border-b-4   border-amber-200 w-80 p-1 hover:bg-orange-50 hover:font-bold hover:text-stone-700 transition-all duration-200'> Title : {selectedTask.title} </p>
         <p className='border-2 border-r-4 border-b-4 border-amber-200  p-1 w-80 transition-all duration-200 hover:bg-orange-50  hover:font-bold hover:text-stone-700'> <span >Description:</span>   {selectedTask.description} </p>
         <p className='border-2 border-r-4 border-b-4 border-amber-200 p-1 w-80 transition-all duration-200 hover:bg-orange-50  hover:font-bold hover:text-stone-700 '> Status: {selectedTask.status} </p>
         <p className='border-2 border-r-4 border-b-4 border-amber-200  p-1 w-80 transition-all duration-200 hover:bg-orange-50  hover:font-bold hover:text-stone-700'> CreatedAt :  { new Date(selectedTask.createdAt).toLocaleDateString()} </p> 
         <div className='flex gap-2 mt-1 w-80 '>
           <button onClick={handleShow} className='flex gap-1 items-center  w-fit m-auto  border  border-amber-300 p-1.5 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-amber-100 hover:border-red-900  hover:text-red-900 active:border-b-1 active:border-l-1 text-sm transition-colors duration-550' > <IoTrashBinOutline /> Delete Task
                            </button>
           <button onClick={handleShowUpdate} className='flex gap-1 items-center  w-fit m-auto  border  border-amber-300 p-1.5 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-amber-100 hover:border-green-900  hover:text-green-900 active:border-b-1 active:border-l-1 text-sm transition-colors duration-550' ><TfiPencilAlt /> Modify Task
                            </button>
                      </div>
   
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
