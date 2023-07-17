import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

const useTodos = (initialValue) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialValue);

  const addNewTodoHandler = (newTodo) => {
    setTodos((prevState) => [
      ...prevState,
      { id: uuidv4(), task: newTodo, completed: false },
    ]);
  };

  const addNewTaskHandler = (id, newTask) => {
    const newupdatedTask = todos.map((taskItem) =>
      taskItem.id === id ? { ...taskItem, task: newTask } : taskItem
    );

    setTodos(newupdatedTask);
  };

  const removeTodoHandler = (removeId) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== removeId));
  };

  const toggleTodoHandler = (todoId) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };

  return {
    todos,
    addNewTodoHandler,
    addNewTaskHandler,
    removeTodoHandler,
    toggleTodoHandler,
  };
};

export default useTodos;
