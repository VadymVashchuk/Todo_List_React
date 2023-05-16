import React, { useEffect, useState } from "react";
import PageTitle from "./components/Header/PageTitle";
import "./App.scss";
import TasksList from "./components/TaskList/TasksList";
import AddingForm from "./components/AddingForm/AddingForm";
import Header from "./components/Header/Header";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { Task } from "./types/types";



function App() {
  const tasksCollectionRef = collection(db, "tasks");
  // ТУТ СКЛАДНЕ МІСЦЕ З TYPESCRIPT
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("All");
  const [addingFormStatus, setAddingFormStatus] = useState("none");
  const [editInput, setEditInput] = useState("");
  const [itemEditingId, setItemEditingId] = useState("");

  useEffect(() => {
    onSnapshot(tasksCollectionRef, (querySnapshot) => {
      setTasks(
        querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  function addNewItem(text: string) {
    let newTask = {
      id: "",
      body: text,
      status: false,
    };
    addDoc(collection(db, "tasks"), {
      body: newTask.body,
      status: newTask.status,
    });
  }

  function deleteItem(itemId: string) {
    const task = doc(tasksCollectionRef, itemId);
    deleteDoc(task);
  }

  function changeStatus(itemId: string, newStatus: boolean) {
    const task = doc(tasksCollectionRef, itemId);
    updateDoc(task, { status: newStatus });
  }

  function editItem() {
    const task = doc(tasksCollectionRef, itemEditingId);
    updateDoc(task, { body: editInput });
  }

  // ФІЛЬТРУВАННЯ
  let filteredTasks = tasks;
  if (filter === "Completed") {
    filteredTasks = tasks.filter((i) => i.status === true);
  } else if (filter === "Uncompleted") {
    filteredTasks = tasks.filter((i) => i.status === false);
  }

  // СЛОЖНЕЙША ОПЕРАЦІЯ СОРТУВАННЯ МАСИВА. ПО ДВОМ ПОЛЯМ - СТАТУС І ПО АЛФАВІТУ ТЕКСТ.
  let sortedTasks = filteredTasks.sort(
    (a, b) =>
      Number(b.status < a.status) - Number(a.status < b.status) ||
      Number(b.body < a.body) - Number(a.body < b.body)
  );

  return (
    <div className="App">
      <PageTitle />
      <Header
        filter={filter}
        setFilter={setFilter}
        addingFormStatus={addingFormStatus}
        setAddingFormStatus={setAddingFormStatus}
      />
      <TasksList
        tasks={sortedTasks}
        deleteItem={deleteItem}
        changeStatus={changeStatus}
        setAddingFormStatus={setAddingFormStatus}
        setEditInput={setEditInput}
        setItemEditingId={setItemEditingId}
      />
      <AddingForm
        editInput={editInput}
        setEditInput={setEditInput}
        addingFormStatus={addingFormStatus}
        setAddingFormStatus={setAddingFormStatus}
        addNewItem={addNewItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;
