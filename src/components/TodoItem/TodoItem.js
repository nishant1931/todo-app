import React from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useToggle from "../../hooks/useToggle";
import TodoEditForm from "../TodoEditForm/TodoEditForm";

const TodoItem = ({
  task,
  completed,
  id,
  removeTodo,
  toggleTodo,
  addNewTask,
}) => {
  const [isEditing, toggleEditing] = useToggle(false);

  const deleteTodoHandler = () => {
    removeTodo(id);
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <TodoEditForm
          addNewTask={addNewTask}
          id={id}
          toggleEditForm={toggleEditing}
          taskItem={task}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggleEditing}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={deleteTodoHandler}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
