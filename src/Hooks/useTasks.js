import React, { useEffect, useState } from 'react'
    const url = import.meta.env.VITE_URL
function useTasks() {
      const [tasks, setTask] = useState([])

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
   console.log("testare",tasks)
  return { tasks, addTask, removeTask, updateTask }; 
  
}

export default useTasks
