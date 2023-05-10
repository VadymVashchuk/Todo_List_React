import React from 'react'
import { TextField, Button } from '@mui/material';

const AddingForm = () => {
  
  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="success">
        Add
      </Button>
      <Button variant="outlined" color="error">
        Cancel
      </Button>
    </>
  )
}

export default AddingForm