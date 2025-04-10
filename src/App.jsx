import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./Pages/TaskList" 
import AddTask from "./Pages/AddTask"
import Navigation from "./Components/Navigation";
function App() {


  return (
    <>
   
        <BrowserRouter>  
         <Navigation/>
          <Routes>
           
              <Route path="/addtasks" Component={AddTask} />
              <Route path="/" Component={TaskList} />
     
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
