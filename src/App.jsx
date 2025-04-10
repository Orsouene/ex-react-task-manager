import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./Context/GlobalContext"
import TaskList from "./Pages/TaskList" 
import AddTask from "./Pages/AddTask"
import Navigation from "./Components/Navigation";
function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>  
           <Navigation/>
                <Routes>
                
                    <Route path="/addtasks" Component={AddTask} />
                    <Route path="/" Component={TaskList} />
          
                </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
