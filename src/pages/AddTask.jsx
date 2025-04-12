import React, { useState, useRef, useMemo, useContext } from 'react'
import {GlobalContext} from "../Context/GlobalContext"
function AddTask() {
  //* il stato del form inizialmente
  const [formTitle, setFormTitle] = useState("")
  const refDescrizione = useRef("")
  const refStato = useRef("")
  const { addTask } = useContext(GlobalContext)




  //* funzione per gestire il form
  const handleForm = async (e) => {
    e.preventDefault()
    const myForm = {
      title: formTitle,
      description: refDescrizione.current.value,
      status: refStato.current.value
    }
  try{
      await addTask(myForm)
      alert("Form inviato")
      setFormTitle("")
      refDescrizione.current.value=""
       refStato.current.value=""
    }
   catch(error){
       alert(error)
    }
    console.log(myForm)
  }
  const controllCamp = useMemo(() => {
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
                  else {
                    return ""
                  }
  }, [formTitle])


  return (
    <div className='border-2  border-amber-800 mt-10  gap-1 max-w-96 m-auto border-b-8 rounded-r-2xl h-96'>
      <form className='flex flex-col gap-3 p-2 ' onSubmit={handleForm}  >
        {/* Title */}
                    <label htmlFor="Status">title</label>
                          <input type="text" name='title' value={formTitle} onChange={e => setFormTitle(e.target.value)} className='border rounded-2xl p-1 text-sm' />
                                 <span className='text-red-600 text-xs'>{controllCamp}</span>
       {/* Description */}
                    <label htmlFor="description">Description</label>
                           <textarea name='description' ref={refDescrizione} className='border rounded-2xl p-1 text-sm' />
         {/* Status */}
                    <label htmlFor="status">Status</label>
                            <select type="text" name='status' ref={refStato} className='border rounded-2xl p-1 text-sm' defaultValue={"To do"} >
                                    <option value="To do">To do</option>
                                    <option value="Doing">Doing</option>
                                    <option value="Done"> Done</option>
                            </select>

        {/* Button */}
        <button type='submit' className=' w-fit m-auto  border  border-amber-800  p-2 rounded-2xl border-b-4 border-l-2 cursor-pointer hover:bg-orange-400 hover:text-white active:border-b-1 active:border-l-1 disabled:opacity-50 disabled:border-b-1 disabled:border-l-1 disabled:not-hover:bg-orange-400 disabled:not-hover:text-white disabled:cursor-not-allowed' disabled={controllCamp}>Submit</button>
      </form>

    </div>
  )
}

export default AddTask
