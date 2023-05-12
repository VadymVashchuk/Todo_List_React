import React, { useState } from 'react';
import PageTitle from './components/PageTitle';
import './App.scss';
import TasksList from './components/TasksList';
import AddingForm from './components/AddingForm';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([
    { id: Math.random(), body: 'Finish the todo-list', status: false },
    { id: Math.random(), body: 'A task', status: false },
    { id: Math.random(), body: 'An task', status: true },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Ze task', status: false },
    { id: Math.random(), body: 'Do some stuff', status: false },
    { id: Math.random(), body: 'Do something else', status: false },
    { id: Math.random(), body: 'Have some rest', status: true },
  ])

  const [filter, setFilter] = useState('All')
  const [addingFormStatus, setAddingFormStatus] = useState(false)

  function deleteItem(itemId: number) {
    setTasks(tasks.filter(el => el.id !== itemId))
  }

  function changeStatus(itemId: number, newStatus: boolean) {
    let task = tasks.find(el => el.id === itemId)
    // Складний момент - тут була помилка TS що task possibly undefined. Для цього ми обгорнули його в цей кондішн... колись з цим розібратися
    if (task) {
      task.status = newStatus;
    }
    // Це теж складний момент - для перерисовки масива треба його так прокинути, інакше він не перемалюється
    setTasks([...tasks])
  }

  function addNewItem(text: string) {
    let newTask = {
      id: Math.random(),
      body: text,
      status: false
    }
    setTasks([...tasks, newTask])
  }

  let filteredTasks = tasks;
  if (filter === 'Completed') {
    filteredTasks = tasks.filter(i => i.status === true)
  } else if (filter === 'Uncompleted') {
    filteredTasks = tasks.filter(i => i.status === false)
  }

  // СЛОЖНЕЙША ОПЕРАЦІЯ ФІЛЬТРУВАННЯ МАСИВА. ПО ДВОМ ПОЛЯМ - СТАТУС І ПО АЛФАВІТУ ТЕКСТ.  
  let sortedTasks = filteredTasks.sort((a, b) => Number((b.status < a.status)) - Number((a.status < b.status)) || Number((b.body < a.body)) - Number((a.body < b.body)))

  return (

    <div className="App">
      <PageTitle />
      <Header filter={filter} setFilter={setFilter} addingFormStatus={addingFormStatus} setAddingFormStatus={setAddingFormStatus} />
      <TasksList tasks={sortedTasks} deleteItem={deleteItem} changeStatus={changeStatus} />
      <AddingForm addingFormStatus={addingFormStatus} setAddingFormStatus={setAddingFormStatus} addNewItem={addNewItem} />
    </div>
  );
}

export default App;
