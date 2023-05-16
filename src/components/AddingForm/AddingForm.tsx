import { TextField, Button, Box } from "@mui/material";

import './AddingForm.scss'
import { AddFormStatus } from "../../types/types";

const AddingForm = (props: AddFormStatus) => {
  const {
    addingFormStatus,
    setAddingFormStatus,
    addNewItem,
    editInput,
    setEditInput,
    editItem,
  } = props;

  const cancelEditing = () => {
    setEditInput("");
    setAddingFormStatus("none");
  };

  function saveItem() {
    if (editInput !== "") {
      addNewItem(editInput);
      cancelEditing();
    } else {
      window.alert("Field can't be empty");
    }
  }

  function saveEditedItem() {
    if (editInput !== "") {
      editItem();
      cancelEditing();
    } else {
      window.alert("Field can't be empty");
    }
  }

  return (
    <Box
      className={
        addingFormStatus === "add" || addingFormStatus === "edit"
          ? "modal-window"
          : "modal-window off"
      }
    >
      <Box className="modal-window-content">
        <TextField
          onChange={(e) => setEditInput(e.target.value)}
          id="outlined-basic"
          label="Task description"
          variant="outlined"
          autoComplete="off"
          value={editInput}
        />
        <Button
          onClick={() => saveItem()}
          variant="contained"
          color="success"
          style={{ display: addingFormStatus === "add" ? "block" : "none" }}
          className="off"
        >
          Add
        </Button>
        <Button
          onClick={() => saveEditedItem()}
          variant="contained"
          color="success"
          style={{ display: addingFormStatus === "edit" ? "block" : "none" }}
        >
          Save
        </Button>
        <Button
          onClick={() => cancelEditing()}
          variant="outlined"
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddingForm;
