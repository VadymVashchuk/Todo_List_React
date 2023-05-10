import React, { useState } from 'react';
import PageTitle from './components/PageTitle';
import './App.scss';
import TasksList from './components/TasksList';
import AddingForm from './components/AddingForm';

function App() {
  const [ tasks, setTasks] = useState([
    {id: 1, body: 'Finish the todo-list', status: false},
    {id: 2, body: 'Do some stuff', status: false},
    {id: 3, body: 'Do something else', status: false},
    {id: 4, body: 'Have some rest', status: true},
  ])

  function deleteItem (itemId: number) {
    setTasks(tasks.filter( el => el.id !== itemId))
  }

  function changeStatus (itemId: number, newStatus: boolean) {
    let task = tasks.find( el => el.id === itemId)
    // Складний момент - тут була помилка TS що task possibly undefined. Для цього ми обгорнули його в цей кондішн... колись з цим розібратися
    if (task) {
      task.status = newStatus;
    }
    // Це теж складний момент - для перерисовки масива треба його так прокинути, інакше він не перемалюється
    setTasks([ ...tasks ])
  }

  return (
    <div className="App">
      <PageTitle/>
      <TasksList tasks={tasks} deleteItem={deleteItem} changeStatus={changeStatus}/>
      {/* <AddingForm/> */}
    </div>
  );
}

export default App;
