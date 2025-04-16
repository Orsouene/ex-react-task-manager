import React, { useContext, useMemo, useState } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import TaskRow from '../Components/TaskRow'
function TaskList() {

  const {tasks} = useContext(GlobalContext)

  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState(1)
  const icon = sortOrder=== 1? " ⬆" : "⬇"
  const [searchQuery, setSearchQuery]=useState("")

  //* Gestione del Sort
  const handleSort = (campo)=>{
    // console.log(campo)
         if(sortBy===campo)
          setSortOrder(prev=>prev*-1)
  else {
      setSortBy(campo) 
      setSortOrder(1)
  }
  }

//* ordine del array
   const arrayOrdinato =useMemo(()=>{
    let orderStatus = [ "To do" ,
      "Doing",
      "Done"]

 //!by-title
    if (sortBy==="title"){
             {
              if (sortOrder===1 )
             tasks.sort((a, b) => { 
             return      a.title.localeCompare(b.title) 
              })
              else {
                 tasks.sort((a, b) => {
               return    b.title.localeCompare(a.title)
                })
              }
            }
    }
 //!by-Status
     if (sortBy === "status") { 
        if (sortOrder === 1) {
        tasks.sort((a, b) =>  { return  orderStatus.indexOf(a.status) - orderStatus.indexOf(b.status)})
     }
     else {
          tasks.sort((a, b) => { return orderStatus.indexOf(b.status) - orderStatus.indexOf(a.status) })
     }}

//!by-createdAt
     if (sortBy === "createdAt") {
        if (sortOrder === 1) {
        tasks.sort((a, b) => {
           return    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
         })
      }
       else {
          tasks.sort((a, b) => {
          return  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
         })
       }     
    }
     
//!  Filtrare il resultato  per la ricerca 
     const filtredArray = tasks.filter(
       el => 
         el.title.toLowerCase().includes(searchQuery.toLowerCase()) || el.status.toLowerCase().includes(searchQuery.toLowerCase()) || (new Date(el.createdAt).toLocaleDateString()).includes(searchQuery)
     
  
                                   )

 return filtredArray
   }, [tasks, sortBy, sortOrder, searchQuery])


   return (
    <div className='w-fit m-auto mt-20  p-20 rounded-2xl border-stone-800 border border-b-8 border-r-5 '>
       <label htmlFor="" className='flex gap-1 mb-2 justify-center border-2 rounded-2xl  w-fit border-stone-800 m-auto p-2 border-b-4 border-r-4'>
         <span className='border p-1' onClick={()=>search()}>Search</span>
         <input className='border ' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} />
         <button className='cursor-pointer border p-1' onClick={()=>setSearchQuery("")}>Reset</button>
      </label>
    
    <table >
                       <thead className='border w-fit m-auto cursor-pointer '>
                                  <tr className='bg-amber-100 '>
                                          <th onClick={() => handleSort("title")}>
                                                              Nome {sortBy ==="title" ? icon :""}
                                          </th>
                                          <th onClick={() => handleSort("status")}>
                                              Stato {sortBy === "status" ? icon : ""}
                                          </th>
                                     
                                            <th onClick={() =>  handleSort("createdAt")} > 
                                              Data di Creazione 
                                           {sortBy === "createdAt" ? icon : ""} 
                                           </th>
                                           
                                      
                                        
                                  </tr>
                        </thead>
                
                          <tbody className='border ' >
                                { arrayOrdinato.length ? arrayOrdinato.map((task) => (  <TaskRow key={task.id} task={task}/> ))
                              : 
                                  <tr>
                                      <td colSpan="100%" className="text-red-800 font-bold text-center">
                                        Nessun Task trovato..
                                      </td>
                                    </tr>
                                          
                                      }
                              
                          </tbody> 
                                            
      </table> 
    
    </div>
  )
}

export default TaskList
