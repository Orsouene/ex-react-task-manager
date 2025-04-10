import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

const GlobalContext = createContext()
const url = import.meta.env.VITE_URL
function GlobalProvider({ children }) {
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
    return (
        <GlobalContext.Provider value={task}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
