import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { LuSearch } from "react-icons/lu"
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { GlobalContext } from '../Context/GlobalContext'
import TaskRow from '../Components/TaskRow'
import { debounce } from 'lodash'
function TaskList() {

  const { tasks } = useContext(GlobalContext)
  // const [selectedTaskIds, setSelectedTaskIds] = useState([])
  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState(1)
  const icon = sortOrder === 1 ? <IoIosArrowDropup /> : <IoIosArrowDropdown />
  const [searchQuery, setSearchQuery] = useState("")
  // checkBox Toggle
  // const toggleSelection = (taskId) => {
  // }


  //* Gestione del Sort
  const handleSort = (campo) => {
    // console.log(campo)
    if (sortBy === campo)
      setSortOrder(prev => prev * -1)
    else {
      setSortBy(campo)
      setSortOrder(1)
    }
  }

  //* ordine del array
  const arrayOrdinato = useMemo(() => {
    let orderStatus = ["To do",
      "Doing",
      "Done"]

    //!by-title
    if (sortBy === "title") {
      {
        if (sortOrder === 1)
          tasks.sort((a, b) => {
            return a.title.localeCompare(b.title)
          })
        else {
          tasks.sort((a, b) => {
            return b.title.localeCompare(a.title)
          })
        }
      }
    }
    //!by-Status
    if (sortBy === "status") {
      if (sortOrder === 1) {
        tasks.sort((a, b) => { return orderStatus.indexOf(a.status) - orderStatus.indexOf(b.status) })
      }
      else {
        tasks.sort((a, b) => { return orderStatus.indexOf(b.status) - orderStatus.indexOf(a.status) })
      }
    }

    //!by-createdAt
    if (sortBy === "createdAt") {
      if (sortOrder === 1) {
        tasks.sort((a, b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        })
      }
      else {
        tasks.sort((a, b) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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

  //* Function debounce 
  const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])


  return (
    <div className='w-fit m-auto mt-20  p-10 rounded-2xl border-[#131010] border border-b-8 border-r-5 hover:border-[#E5BA73] transition-colors duration-1200 hover:border-t-2 border-l-2 mx-2  '>
      <label htmlFor="" className='flex gap-1 mb-2 justify-center  rounded-2xl  w-fit border-[#C58940] m-auto p-2 hover:border-b-4 hover:border-r-4 hover:border-l  hover:border-t items-center transition-all duration-150 h-12'><LuSearch />
        <input className='border border-[#C58940] '  placeholder='  Search for a task..' onChange={(e) => debounceSearch(e.target.value)} />

      </label>

      <table className=' border ' >
        <thead className='  w-fit m-auto cursor-pointer  '>
          <tr className='bg-amber-100 '>
                {/* <th className='border '></th> */}
             
                  <th className="" onClick={() => handleSort("title")}>
                
                    <span className='flex gap-3 items-center w-fit m-auto '>
                     Name  {sortBy === "title" ? icon : ""}
                    </span>
                 
                </th>
          
              
                <th className='' onClick={() => handleSort("status")}>
              <span className='flex w-fit m-auto items-center gap-3'>Status {sortBy === "status" ? icon : ""}
                  </span> 
                </th>
        
                <th onClick={() => handleSort("createdAt")} >
                  <span className='flex items-center w-fit m-auto gap-3'>
                Creation Date
                  {sortBy === "createdAt" ? icon : ""}
                  </span>
                  
                </th>
          </tr>
        </thead>

        <tbody className='' >
          {arrayOrdinato.length ? arrayOrdinato.map((task) => (<TaskRow key={task.id} task={task} />))
            :
            <tr>
              <td colSpan="100%" className="text-red-800 font-bold text-center">
                No Task found..
              </td>
            </tr>

          }

        </tbody>

      </table>

    </div>
  )
}

export default TaskList
