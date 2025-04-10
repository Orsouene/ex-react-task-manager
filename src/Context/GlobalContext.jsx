import React from 'react'
import { createContext } from 'react'
import useTasks from '../Hooks/useTasks'

const GlobalContext = createContext()
function GlobalProvider({ children }) {
    const { tasks, addTask, removeTask, updateTask } =useTasks()
   
    return (
        <GlobalContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
