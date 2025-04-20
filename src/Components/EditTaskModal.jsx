import React, { useState,useRef } from 'react'
import ReactDOM from "react-dom"
import Modal from './Modal'
function EditTaskModal({ show, onClose, task, onSave }) {
const [taskAggiornato,settaskAggiornato]=useState(task)

//* Funzione per recuperare le dati per aggiornare il task
const editedTask=(key,e)=>{
  settaskAggiornato(prev=>({...prev,[key]:e.target.value}))
}
//* funzione per  gestire il form
 const handlesubmit =(e)=>{
  e.preventDefault()
   onSave(taskAggiornato)
   
 }
//*  Dichiarazione d'un refereimento che verrà passato al form
const editFormRef=useRef()
//* gestire l'apparizione del modale
  if (!show){
  return null
}
  return (
    <>
    {ReactDOM.createPortal(
        
           <Modal
           
            title="Modifica text"
            content={
                      <form ref={editFormRef} onSubmit={handlesubmit} className=" flex flex-col gap-1"> 
                              <input value={editedTask.title} onChange={(e) => editedTask("title",e)} className='border-2'/>
                            
                            <textarea value={editedTask.description} onChange={(e) => editedTask("description", e)} className='border-2' />
                            
                            <select value={editedTask.status} onChange={(e) => editedTask("status", e)} className='border-2'>
                                  <option value="To do">"To do"</option>
                                  <option value="Doing">"Doing"</option>
                                  <option value="Done">"Done"</option>
                            </select>
                    
                      </form>  
                    }
        
            confirmText='Salva' 
            onConfirm={() => editFormRef.current.requestSubmit()}
            show={show}
            onClose={onClose}
            onSave={taskAggiornato}
           
           /> 
    ,document.body)
      
    }
    </>
  )
}

export default EditTaskModal
