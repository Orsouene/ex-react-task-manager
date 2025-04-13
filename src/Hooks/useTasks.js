import React, { useEffect, useState } from "react";
const url = import.meta.env.VITE_URL;

function useTasks() {
  const [tasks, setTask] = useState([]);

  async function getTasks() {
    try {
          const fetchTasks = await fetch(url);
          const data = await fetchTasks.json();
          setTask(data);
    //   console.log("recupero dei dati dal global context", data);
    } catch (error) {
          console.log("errore nel recupero dei dati ", error);
    }
  }
  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async  (newTask) => {
    const sendData = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newTask),
    });
    const res= await sendData.json()
  // console.log(res)
    if (res.success===true) {
            return setTask([...tasks,newTask])
    } 
    else {
            throw new Error(res.message)
    }
  };


  const removeTask = async (taskId) => {
   const deleteData = await fetch(`${url}/${taskId}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json"
      }
    })
    const res=await deleteData.json()
    if(res.success) {
  const filtredTask = tasks.filter(el=>el.id!==taskId)
   setTask(filtredTask) }  
   else{
    throw new Error(res.message)
   }
 

  };





  const updateTask = () => {};
  console.log("testare", tasks);
  return { tasks, addTask, removeTask, updateTask };
}

export default useTasks;
