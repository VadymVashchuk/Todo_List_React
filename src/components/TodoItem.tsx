import React, { useState } from 'react'
import {Typography, Box, Checkbox, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TaskType } from './TasksList';
import classnames from 'classnames';


type PostType = {
  index: number
  post: TaskType
  deleteItem: Function
  changeStatus: Function
  setAddingFormStatus: Function
  setEditInput: Function
  setItemEditingId: Function
}

const TodoItem = (props: PostType) => {
  const {index, post, deleteItem, changeStatus, setAddingFormStatus, setEditInput, setItemEditingId} = props;

  function editItemText(itemtext: string, itemId: number) {
    setEditInput(itemtext)
    setAddingFormStatus('edit')
    setItemEditingId(itemId)
  }

  // СКАЧУЮ УТИЛІТУ 'npm install classnames'

  return (
    <Box className={classnames('todo-item', {'taskIsDone': post.status})}> 
      <Typography variant="h5" width={30} fontWeight={600}>{index + 1}</Typography>
      <Typography variant="h5" lineHeight={1.1} width={500}>{post.body}</Typography>
      <Checkbox
        checked={post.status}
        onChange={(e) => changeStatus(post.id, e.target.checked)}
        className='checkbox-item'
        sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <EditIcon onClick={() => editItemText(post.body, post.id)} style={{ fontSize: 35 }} className='btn__el'/>
      <DeleteIcon onClick={() => deleteItem(post.id)} style={{ fontSize: 40 }} className='btn__el del-btn'/>
    </Box>
  )
}

export default TodoItem
