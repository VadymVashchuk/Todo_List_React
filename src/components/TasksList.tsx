import React from 'react'
import TodoItem from './TodoItem';

type TaskListProps = {
  tasks: Array<TaskType>
  deleteItem: Function
  changeStatus: Function
}

export type TaskType = {
  id: number
  body: string
  status: boolean
}

const TasksList = (props: TaskListProps) => {
  return (
    <>
      {props.tasks.map((item: TaskType) => <TodoItem index={props.tasks.indexOf(item)} post={item} key={item.id} deleteItem={props.deleteItem} changeStatus={props.changeStatus}/>)}
    </>
  )
}

export default TasksList