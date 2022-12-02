import './App.css';
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTaskForm from './components/AddTaskForm'
import UpdateForm from './components/UpdateForm'
import ToDo from './components/ToDo'

function App() {

// Tasks (To Do List) State
const [toDo, setToDo] = useState([])

// Temporary State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

// Add Task
const addTask = () => {
  if(newTask){
    let num = toDo.length + 1
    let newEntry = { id: num, title: newTask, status: false}
    setToDo([...toDo, newEntry])
    setNewTask('');
  }
}

// Delete Task
const deleteTask = (id) => {
  let newTasks = toDo.filter(task => task.id !== id)
  setToDo(newTasks)
}

// Mark Task as done or Completed
const markDone = (id) => {
  let newTask = toDo.map( task => {
    if(task.id === id ){
      return ({...task, status: !task.status})
    }
    return task;
  })
  setToDo(newTask);
  
}
// Cancel Update
const cancelUpdate = () => {
  setUpdateData("");

}
// Change task for update
const changeTask = (e) => {
  let newEntry = {
    id: updateData.id,
    title: e.target.value,
    status: updateData.status ? true : false
  }
  setUpdateData(newEntry)
}
// Update task
const updateTask = () => {
  let filterRecords = [...toDo].filter(task => task.id !== updateData.id )
  let updatedObject = [...filterRecords, updateData]
  setToDo(updatedObject);
  setUpdateData('');
}



  return (
    <div className="container App">

      <br/><br/>
      <h2>To Do List App (REACT JS)</h2>
      <br/><br/>

      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateForm
        updateData = {updateData}
        changeTask = {changeTask}
        updateTask = {updateTask}
        cancelUpdate = {cancelUpdate}
        />
      ): (
        <AddTaskForm
        newTask = { newTask } 
        setNewTask = { setNewTask }
        addTask  = { addTask }
        />
      )}
      


      {toDo && toDo.length ? "" : 'No Task...'}

      <ToDo
      toDo = {toDo}
      markDone = {markDone}
      setUpdateData = { setUpdateData}
      deleteTask = { deleteTask }
       />

    </div>
  );
}



export default App;
