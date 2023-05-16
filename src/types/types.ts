export interface Task {
  id: string;
  body: string;
  status: boolean;
}

export interface AddFormStatus {
  addingFormStatus: string;
  setAddingFormStatus: Function;
  addNewItem: Function;
  editInput: string;
  setEditInput: Function;
  editItem: Function;
}

export interface HeaderProps {
  filter: string;
  setFilter: Function;
  addingFormStatus: string;
  setAddingFormStatus: Function;
}

export interface PostType {
  index: number;
  post: TaskType;
  deleteItem: Function;
  changeStatus: Function;
  setAddingFormStatus: Function;
  setEditInput: Function;
  setItemEditingId: Function;
}

export type TaskType = {
  id: string;
  body: string;
  status: boolean;
}

export interface TaskListProps {
  tasks: Array<TaskType>;
  deleteItem: Function;
  changeStatus: Function;
  setAddingFormStatus: Function;
  setEditInput: Function;
  setItemEditingId: Function;
}