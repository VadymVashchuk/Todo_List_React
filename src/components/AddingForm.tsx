import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material';

type AddFormStatus = {
  addingFormStatus: boolean
  setAddingFormStatus: Function
  addNewItem: Function
}

const AddingForm = (props: AddFormStatus) => {

  const {addingFormStatus, setAddingFormStatus, addNewItem} = props;
  const [editInput, setEditInput] = useState('');

  const cancelEditing = () => {
    setEditInput('')
    setAddingFormStatus(false)
  }

  function saveItem() {
    addNewItem(editInput)
    cancelEditing()
  }

  return (
    <Box className={addingFormStatus ? 'modal-window' : 'modal-window off'}>
      <Box className="modal-window-content">
        <TextField onChange={e => setEditInput(e.target.value)} id="outlined-basic" label="Task description" variant="outlined" autoComplete='off' value={editInput} />
        <Button onClick={() => saveItem()} variant="contained" color="success">
          Add
        </Button>
        <Button onClick={() => cancelEditing()} variant="outlined" color="error">
          Cancel
        </Button>
      </Box>
    </Box>
  )
}

export default AddingForm