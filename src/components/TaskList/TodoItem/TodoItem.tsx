import { Typography, Box, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './TodoItem.scss'
import { PostType } from '../../../models/types';
import { changeStatus, deleteItem } from '../../../helper/FirebaseFunctions';


const TodoItem = (props: PostType) => {
  const { index, post, setAddingFormStatus, setEditInput, setItemEditingId } = props;

  function editItemText(itemtext: string, itemId: string) {
    setEditInput(itemtext)
    setAddingFormStatus('edit')
    setItemEditingId(itemId)
  }

  return (
    <Box className={`todo-item ${post.status ? "taskIsDone" : ""} `}>
      <Typography variant="h5" width={30} fontWeight={600}>{index + 1}</Typography>
      <Typography variant="h5" lineHeight={1.1} width={500}>{post.body}</Typography>
      <Checkbox
        checked={post.status}
        onChange={(e) => changeStatus(post.id, e.target.checked)}
        className='checkbox-item'
        sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <EditIcon onClick={() => editItemText(post.body, post.id)} style={{ fontSize: 35 }} className='btn__el' />
      <DeleteIcon onClick={() => deleteItem(post.id)} style={{ fontSize: 40 }} className='btn__el del-btn' />
    </Box>
  )
}

export default TodoItem