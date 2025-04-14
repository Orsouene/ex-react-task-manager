import React from 'react'
import ReactDOM  from 'react-dom';
function Modal({ content, title , show, onClose, onConfirm, confirmText = "Confirm" }) {


   
  return (
<> 
{ReactDOM.createPortal(  
            <div className='bg-stone-200 w-[100%] h-[100vh] fixed top-0   flex justify-center items-center  opacity-80 flex-col'>
                <section className='border bg-white p-5 rounded-2xl'>
            <p className='flex justify-center '>{content}</p>
            <p className='flex justify-center '>{title}</p>
            <div className='  p-1 flex gap-1  justify-center'>
                <button className='border p-1 cursor-pointer' onClick={onConfirm}>{confirmText}</button>
                <button className='border p-1 cursor-pointer ' onClick={onClose}>Close</button>
            </div>
                </section>
          
            
               </div>
             
              ,document.body
          )}
</>
         
  
  )
}

export default Modal
