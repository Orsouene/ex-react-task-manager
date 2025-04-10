import React, { createContext, useState } from 'react'
const GlobalContext=createContext()
function GlobalProvider() {
    const [task,setTask]=useState([])
    async function getTasks() {
        try {
            const fetchTasks = await fetch(url)
            const data = await fetchTasks.json()
            setTask(data)
            console.log("recupero dei dati dal global context", data)
           
        }
        catch (error) {
            console.log("errore nel recupero dei dati ")
        }
    }
    useEffect(() => { getTasks() }, [])
  return (
    <div>
      
    </div>
  )
}

export  {GlobalProvider,GlobalContext}
