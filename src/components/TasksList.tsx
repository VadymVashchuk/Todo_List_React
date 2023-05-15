import React from 'react'
import TodoItem from './TodoItem';

type TaskListProps = {
  tasks: Array<TaskType>
  deleteItem: Function
  changeStatus: Function
  setAddingFormStatus: Function
  setEditInput: Function
  setItemEditingId: Function
}

export type TaskType = {
  id: string
  body: string
  status: boolean
}

const TasksList = (props: TaskListProps) => {
  return (
    <>
      {props.tasks.map((item: TaskType) => <TodoItem index={props.tasks.indexOf(item)} post={item} key={item.id} deleteItem={props.deleteItem} changeStatus={props.changeStatus} setAddingFormStatus={props.setAddingFormStatus} setEditInput={props.setEditInput} setItemEditingId={props.setItemEditingId}/>)}
    </>
  )
}

export default TasksList