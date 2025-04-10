import React, { createContext, useState } from 'react'
const GlobalContext=createContext()
function GlobalProvider() {
    const [tasks,setTasks]=useState([])
  return (
    <div>
      
    </div>
  )
}

export  {GlobalProvider,GlobalContext}
