import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ removeTodo, toggleTodo, todos, addNewTask }) => {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={i}>
              <TodoItem
                {...todo}
                addNewTask={addNewTask}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  }

  return (
    <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
      Add your todos here!
    </h1>
  );
};

export default TodoList;
