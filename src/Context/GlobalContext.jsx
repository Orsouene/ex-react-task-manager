import React from 'react'
import { createContext } from 'react'
import useTasks from '../Hooks/useTasks'

const GlobalContext = createContext()
function GlobalProvider({ children }) {
    const tasks =useTasks()
    console.log(tasks)
    return (
        <GlobalContext.Provider value={tasks}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
