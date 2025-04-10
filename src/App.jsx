import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>

        <BrowserRouter>
          <Routes>
           
              <Route path="/addtasks" Component={AddTask} />
              <Route path="/tasks" Component={TaskList} />
     
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
