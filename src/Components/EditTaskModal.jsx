import React, { useState,useRef } from 'react'
import ReactDOM from "react-dom"
import Modal from './Modal'
function EditTaskModal({ show, onClose, task, onSave }) {
const [taskAggiornato,settaskAggiornato]=useState(task)

const editedTask=(key,e)=>{
  settaskAggiornato(prev=>({...prev,[key]:e.target.value}))
}
  console.log("editedTask : ", taskAggiornato)
 const handlesubmit =(e)=>{
  e.preventDefault()
   onSave(taskAggiornato)
   
 }
const editFormRef=useRef()
  if (!show){
  return null
}
  return (
    <>
    {ReactDOM.createPortal(
        
           <Modal
           
           title="Modifica text"
            content={
              <form ref={editFormRef} onSubmit={handlesubmit} className="bg-red-500 flex flex-col gap-1"> 
                      <input value={editedTask.title} onChange={(e) => editedTask("title",e)} className='border-2'/>
                    
                <textarea value={editedTask.description} onChange={(e) => editedTask("description", e)} className='border-2' />
                     
                <select value={editedTask.status} onChange={(e) => editedTask("status", e)} className='border-2'>
                        <option value="To do">"To do"</option>
                        <option value="Doing">"Doing"</option>
                        <option value="Done">"Done"</option>
                      </select>
             
              </form>  }
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
