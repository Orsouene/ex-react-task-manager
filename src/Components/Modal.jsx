import React from 'react'
import { useTheme } from '../Context/ThemeContext';
import ReactDOM  from 'react-dom';
function Modal({ content, title, show, onClose, onConfirm, confirmText = "Confirm" }) {
 return (
          <> 
              {ReactDOM.createPortal(  
                      <ModalComponent content={content} title = { title } show = { show } onClose = { onClose } onConfirm = { onConfirm } confirmText = "Confirm" 
                      /> 
                      ,document.body
               )}
          </>
         
        )
}

export default Modal

function ModalComponent({ content, title, show, onClose, onConfirm, confirmText = "Confirm" }) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    
    <div className='bg-stone-800 w-[100%] h-[100vh] fixed top-0 pt-100   flex justify-center items-center  opacity-95 flex-col'>
      <section className={` ${isDarkMode ? ` border-2 border-[#E5BA73]   justify-between mt-10 rounded-b-2xl px-10 border-b-4 m-auto  py-2  text-[#E5BA73]
                    font-bold hover:border-[#E5BA73] transition-colors duration-1200` : ` border - 2 border-stone-800   justify-between mt-10 rounded-b-2xl px-10 border-b-4 m-auto py-2 bg-amber-50 text-[#E5BA73] hover:border-[#E5BA73] transition-colors duration-1200 `} `}>
        <div className='flex justify-center  '>{content}</div>
        <div className='flex justify-center '>{title}</div>
        <div className='  p-1 flex gap-1  justify-center'>
          <button className={`${isDarkMode ? `w-fit m-auto  border    p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-amber-50 hover:text-[#E5BA73] border-[#E5BA73] active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-50 disabled:not-hover:text-orange-300 disabled:cursor-not-allowed transition-colors duration-500 ` : `  w-fit m-auto  border  border-stone-800  p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-amber-50 hover:text-[#E5BA73] hover:border-[#E5BA73] active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-50 disabled:not-hover:text-orange-300 disabled:cursor-not-allowed transition-colors duration-500`}`} onClick={onConfirm}>{confirmText}</button>
          <button className={`${isDarkMode ? ` w-fit m-auto  border    p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-amber-50 hover:text-[#E5BA73] border-[#E5BA73] active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-50 disabled:not-hover:text-orange-300 disabled:cursor-not-allowed transition-colors duration-500` : ` w-fit m-auto  border  border-stone-800  p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-amber-50 hover:text-[#E5BA73] hover:border-[#E5BA73] active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-50 disabled:not-hover:text-orange-300 disabled:cursor-not-allowed transition-colors duration-500`}`} onClick={onClose}>Close</button>
        </div>
      </section>


    </div>

  ) 
}