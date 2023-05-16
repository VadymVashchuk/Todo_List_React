import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";

import "./App.scss";
import PageTitle from "./components/Header/PageTitle";
import TasksList from "./components/TaskList/TasksList";
import AddingForm from "./components/AddingForm/AddingForm";
import Header from "./components/Header/Header";
import { Task } from "./models/types";
import { tasksCollectionRef } from "./helper/FirebaseFunctions";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("All");
  const [addingFormStatus, setAddingFormStatus] = useState("none");
  const [editInput, setEditInput] = useState("");
  const [itemEditingId, setItemEditingId] = useState("");
  const [sortedTasks, setSortedTasks] = useState<Task[]>([])


  useEffect(() => {
    onSnapshot(tasksCollectionRef, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  // ФІЛЬТРУВАННЯ
  let filteredTasks = tasks;
  if (filter === "Completed") {
    filteredTasks = tasks.filter((i) => i.status === true);
  } else if (filter === "Uncompleted") {
    filteredTasks = tasks.filter((i) => i.status === false);
  }

  // СЛОЖНЕЙША ОПЕРАЦІЯ СОРТУВАННЯ МАСИВА. ПО ДВОМ ПОЛЯМ - СТАТУС І ПО АЛФАВІТУ ТЕКСТ. + тут useState щоб воно сортувало тільки тоді коли міняються дані в масиві
  useEffect(() => {
    setSortedTasks(filteredTasks.sort(
      (a, b) =>
        Number(b.status < a.status) - Number(a.status < b.status) ||
        Number(b.body < a.body) - Number(a.body < b.body)
    ) || [])
  }, [tasks])


  return (
    <div className="App">
      <PageTitle />
      <Header
        filter={filter}
        setFilter={setFilter}
        setAddingFormStatus={setAddingFormStatus}
      />
      <TasksList
        tasks={sortedTasks}
        setAddingFormStatus={setAddingFormStatus}
        setEditInput={setEditInput}
        setItemEditingId={setItemEditingId}
      />
      <AddingForm
        editInput={editInput}
        setEditInput={setEditInput}
        addingFormStatus={addingFormStatus}
        setAddingFormStatus={setAddingFormStatus}
        itemEditingId={itemEditingId}
      />
    </div>
  );
}

export default App;
