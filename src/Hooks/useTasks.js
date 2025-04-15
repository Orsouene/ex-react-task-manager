import React, { useEffect, useState } from "react";
const url = import.meta.env.VITE_URL;

function useTasks() {
  const [tasks, setTask] = useState([]);
  //*GET-Task***/
  async function getTasks() {
    try {
      const fetchTasks = await fetch(url);
      const data = await fetchTasks.json();
      setTask(data);
    } catch (error) {
      console.log("errore nel recupero dei dati ", error);
    }
  }
  useEffect(() => {
    getTasks();
  }, []);
  //*ADD-Task***/
  const addTask = async (newTask) => {
    const sendData = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    const res = await sendData.json();
    if (res.success === true) {
      return setTask([...tasks, newTask]);
    } else {
      throw new Error(res.message);
    }
  };

  //*REMOVE-task***/
  const removeTask = async (taskId) => {
    const deleteData = await fetch(`${url}/${taskId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const res = await deleteData.json();
    if (res.success) {
      const filtredTask = tasks.filter((el) => el.id !== taskId);
      setTask(filtredTask);
    } else {
      throw new Error(res.message);
    }
  };
  //*UPDATE-task***/
 
 
  const updateTask =async (updatedTask) => {
 try {
   const updatingData = await fetch(`${url}/${updatedTask.id}`, {
     method: "PUT",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(updatedTask),
   });

 const {success,message,task:newTask}= await updatingData.json()
  if(success){
              setTask(prev=>prev.map(
                oldTask=>oldTask.id===newTask.id?newTask:oldTask
              ) )
             }
 } catch (error) {
   throw new Error(error)
 }
  };

  return { tasks, addTask, removeTask, updateTask };
}

export default useTasks;
