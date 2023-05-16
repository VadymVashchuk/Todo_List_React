import TodoItem from "./TodoItem/TodoItem";
import { TaskListProps, TaskType } from "../../types/types";

const TasksList = (props: TaskListProps) => {
  return (
    <>
      {props.tasks.map((item: TaskType) => (
        <TodoItem
          index={props.tasks.indexOf(item)}
          post={item}
          key={item.id}
          deleteItem={props.deleteItem}
          changeStatus={props.changeStatus}
          setAddingFormStatus={props.setAddingFormStatus}
          setEditInput={props.setEditInput}
          setItemEditingId={props.setItemEditingId}
        />
      ))}
    </>
  );
};

export default TasksList;
