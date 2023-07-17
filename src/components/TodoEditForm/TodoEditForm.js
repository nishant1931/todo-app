import { TextField } from "@mui/material";
import React from "react";
import useInputState from "../../hooks/useInputState";

const TodoEditForm = ({ taskItem, addNewTask, id, toggleEditForm }) => {
  const [task, updateEditTask, resetForm] = useInputState(taskItem);

  const editTaskHandler = (e) => {
    e.preventDefault();
    addNewTask(id, task);
    resetForm();
    toggleEditForm();
  };

  return (
    <form
      onSubmit={editTaskHandler}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={task}
        onChange={updateEditTask}
        variant="standard"
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default TodoEditForm;
