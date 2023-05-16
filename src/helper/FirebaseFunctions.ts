import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const tasksCollectionRef = collection(db, "tasks");

//РОБОТА З FIREBASE

export function deleteItem(itemId: string) {
  const task = doc(tasksCollectionRef, itemId);
  deleteDoc(task);
}

export function addNewItem(text: string) {
  let newTask = {
    id: "",
    body: text,
    status: false,
  };
  addDoc(tasksCollectionRef, {
    body: newTask.body,
    status: newTask.status,
  });
}

export function changeStatus(itemId: string, newStatus: boolean) {
  const task = doc(tasksCollectionRef, itemId);
  updateDoc(task, { status: newStatus });
}

export function editItem(itemId: string, text: string) {
  const task = doc(tasksCollectionRef, itemId);
  updateDoc(task, { body: text });
}