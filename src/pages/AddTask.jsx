import React, { useState, useRef, useEffect, useMemo } from 'react'

function AddTask() {

  const refDescrizione = useRef("")
  const refStato = useRef("")
  //* il stato del form inizialmente
  const [formTitle, setFormTitle] = useState("")
  //* funzione per gestire il form
  const handleForm = (e) => {
           e.preventDefault()
         
  }
  const controllCamp = useMemo( () => {
        const symbols = "'!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~"
        const arrayTitle = formTitle.split("")
        const arraySymbole = symbols.split("").map(elemento => elemento)
        console.log(arraySymbole)
        const controle = arrayTitle.some((el) => arraySymbole.includes(el))
              if (formTitle.trim() === "") {
                         return "Il campo non deve essere vuoto"
              }
              else if (controle) {
             return "Il titolo non deve contenere dei symboli "

              }
              else{
                return ""
              }
  }, [formTitle])  


  return (
    <div className='border-2  border-amber-800 mt-10  gap-1 max-w-96 m-auto border-b-8 rounded-r-2xl h-96'>
          <form className='flex flex-col gap-3 p-2' onSubmit={handleForm} >
            {/* Title */}

                      <label htmlFor="Status">title</label>
                      <input type="text" name='title' value={formTitle} onChange={e => setFormTitle(e.target.value)} className='border rounded-2xl p-1 text-sm' />
                      <span className='text-red-600 text-xs'>{controllCamp}</span>

                      {/* Description */}
                      <label htmlFor="Description">Description</label>
                      <textarea type="text" name='description' ref={refStato} className='border rounded-2xl p-1 text-sm' />
                      {/* Status */}
                      <label htmlFor="Description">Status</label>
                      <select type="text" name='status' ref={refDescrizione} className='border rounded-2xl p-1 text-sm' defaultValue={"To do"} >
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done"> Done</option>

                      </select>

                      {/* Button */}
                      <button type='submit' className=' w-fit m-auto  border  border-amber-800  p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-orange-400 hover:text-white active:border-b-1 active:border-l-1'>Submit</button>
          </form>

    </div>
  )
}

export default AddTask
