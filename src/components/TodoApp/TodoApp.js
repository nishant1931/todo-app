import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import { Grid } from "@mui/material";
import useTodos from "../../hooks/useTodos";

// const initialTodos = [
//   { id: 1, task: "Walk dog", completed: false },
//   { id: 2, task: "Bath cat", completed: false },
//   { id: 3, task: "Enjoy game", completed: true },
// ];

const TodoApp = () => {
  const initialTodos = [];
  const {
    todos,
    addNewTodoHandler,
    addNewTaskHandler,
    removeTodoHandler,
    toggleTodoHandler,
  } = useTodos(initialTodos);
  //   const [todos, setTodos] = useState(initialTodos);

  //   useEffect(() => {
  //     window.localStorage.setItem("todos", JSON.stringify(todos));
  //   }, [todos]);

  return (
    <Box sx={{ flexGrow: 1 }} style={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1.5rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addNewTodoHandler} />
          <TodoList
            todos={todos}
            removeTodo={removeTodoHandler}
            toggleTodo={toggleTodoHandler}
            addNewTask={addNewTaskHandler}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoApp;
