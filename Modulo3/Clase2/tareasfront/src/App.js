import React, {useState, useEffect} from "react";
import axios from 'axios'
 
const App = () =>{
  const [tasks, setTasks]= useState([])
  const [newTaskTtitle, setNewTaskTitle]= useState('')
 
useEffect(() =>{
  fetchTasks()
}, [])
 
//metodo get
 
const fetchTasks = async () =>{
  try{
     const response = await axios.get('http://localhost:4000/tasks')
     setTasks(response.data)
 
  }catch (error){
    console.error('Errpr al recuperar las tareas', error)
  }
}
 
// metodo post
const createTasks = async() =>{
  try{
      const response = await axios.post('http://localhost:4000/tasks', {title:newTaskTtitle})
      setTasks([...tasks, response.data])
      setNewTaskTitle('')
  }catch (error){
    console.error('Error al crear la tarea', error)
  }
}
 
//metodo update
const updateTask = async (id, updateTask) =>{
  try{
    const response = await axios.put(`http://localhost:4000/tasks/${id}`, updateTask)
    setTasks(tasks.map(task => (task.id=== id ? response.data :task )))
  }catch(error){
    console.error('Error al modificar la tarea', error)
  }
}
 
//metodo de eliminacion
 
const deletetask = async (id) =>{
  try{
    await axios.delete(`http://localhost:4000/tasks/${id}`)
    setTasks(tasks.filter(task => task.id !== id))
  }catch(error){
    console.error('Error al eliminar la tarea', error)
  }
}
 
return(
  <div>
    <h1>Administrador de tareas</h1>
    <input type="text" value={newTaskTtitle} onChange={(e) => setNewTaskTitle(e.target.value)}
    placeholder="Nueva tarea" />
    <button onClick={createTasks}>Agregar tarea</button>
    <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="text" value={task.title} onChange={(e) => updateTask(task.id, { title: e.target.value})}/>
            <button onClick={() => deletetask(task.id)}>Eliminar</button>
          </li>
        ))}
 
    </ul>
  </div>
)
}
export default App;