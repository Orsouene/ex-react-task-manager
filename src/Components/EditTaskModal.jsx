import React, { useState, useRef } from 'react'
import ReactDOM from "react-dom"
import Modal from './Modal'
import { FaDeleteLeft } from "react-icons/fa6";
function EditTaskModal({ show, onClose, task, onSave }) {
  const [taskAggiornato, settaskAggiornato] = useState(task)

  //* Funzione per recuperare le dati per aggiornare il task
  const editedTask = (key, e) => {
    settaskAggiornato(prev => ({ ...prev, [key]: e.target.value }))
  }
  //* funzione per  gestire il form
  const handlesubmit = (e) => {
    e.preventDefault()
    onSave(taskAggiornato)

  }
  //*  Dichiarazione d'un refereimento che verrà passato al form
  const editFormRef = useRef()
  //* gestire l'apparizione del modale
  if (!show) {
    return null
  }
  return (
    <>
      {ReactDOM.createPortal(

        <Modal

          title={<span className='animate-bounce  mt-2 '> Modify text </span>}
          content={
                      <form ref={editFormRef} onSubmit={handlesubmit} className=" flex flex-col gap-1">
                              <div className='border-2 flex items-center'>
                                <input value={taskAggiornato.title} onChange={(e) => editedTask("title", e)} />
                                <span className='mr-1 active:text-red-900 cursor-pointer ' onClick={() => settaskAggiornato({ ...taskAggiornato, title: "" })}><FaDeleteLeft />
                                </span>
                              </div>

                              <div className='border-2 flex justify-between items-center' >
                                <textarea value={taskAggiornato.description} onChange={(e) => editedTask("description", e)} />
                                <span className='mr-1 active:text-red-900 cursor-pointer ' onClick={() => settaskAggiornato({ ...taskAggiornato, description: "" })}><FaDeleteLeft /></span>
                              </div>


                              <select value={taskAggiornato.status} onChange={(e) => editedTask("status", e)} className='border-2 '>
                                <option className='font-bold' value="To do" >To do</option>
                                <option className='font-bold' value="Doing">Doing</option>
                                <option className='font-bold' value="Done">Done</option>
                              </select>

                      </form>
                  }

          confirmText='Salva'
          onConfirm={() => editFormRef.current.requestSubmit()}
          show={show}
          onClose={onClose}
          onSave={taskAggiornato}

        />
        , document.body)

      }
    </>
  )
}

export default EditTaskModal
