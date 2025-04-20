import React from 'react'
import ReactDOM  from 'react-dom';
function Modal({ content, title , show, onClose, onConfirm, confirmText = "Confirm" }) {


   
  return (
<> 
{ReactDOM.createPortal(  
  <div className='bg-stone-800 w-[100%] h-[100vh] fixed top-0 pt-100   flex justify-center items-center  opacity-95 flex-col'>
    <section className='border border-stone-900 bg-[#FAF8F1] text-[#C58940] p-5 rounded-2xl '>
            <div className='flex justify-center '>{content}</div>
            <div className='flex justify-center '>{title}</div>
            <div className='  p-1 flex gap-1  justify-center'>
        <button className='  w-fit m-auto  border  border-stone-800  p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-[#E5BA73] hover:text-white hover:border-[#E5BA73] active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-50 disabled:not-hover:text-orange-300 disabled:cursor-not-allowed transition-colors duration-500' onClick={onConfirm}>{confirmText}</button>
                <button className='  w-fit m-auto  border  border-stone-800  p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-[#E5BA73] hover:text-white hover:border-[#E5BA73] active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-50 disabled:not-hover:text-orange-300 disabled:cursor-not-allowed transition-colors duration-500'  onClick={onClose}>Close</button>
            </div>
                </section>
         
            
               </div>
             
              ,document.body
          )}
</>
         
  
  )
}

export default Modal
