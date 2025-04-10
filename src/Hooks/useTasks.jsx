import React, { useEffect, useState } from 'react'

function useTasks() {
      const [task, setTask] = useState([])
        async function getTasks() {
            try {
                const fetchTasks = await fetch(url)
                const data = await fetchTasks.json()
                setTask(data)
                console.log("recupero dei dati dal global context", data)
            }
            catch (error) {
                console.log("errore nel recupero dei dati ",error)
            }
        }
        useEffect(() => { getTasks() }, [])
   const  addTask = ()=>{}
   const  removeTask = ()=>{}
   const  updateTask = ()=>{}
   
  return (
    <div>
      
    </div>
  )
}

export default useTasks
