import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import useInputState from "../../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [task, setTask, clearTask] = useInputState("");

  const submitTaskHandler = (e) => {
    e.preventDefault();
    addTodo(task);
    clearTask();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={submitTaskHandler}>
        <TextField
          label="Add New Todo"
          variant="standard"
          fullWidth
          margin="normal"
          value={task}
          onChange={setTask}
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
