import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const createAddTodoAction = (todo) => ({
  type: "[TODO] Add Todo",
  payload: todo,
});

const createRemoveTodoAction = (id) => ({
  type: "[TODO] Remove Todo",
  payload: id,
});

const createToggleTodoAction = (id) => ({
  type: "[TODO] Toggle Todo",
  payload: id,
});

export const useTodos = (initialState = []) => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = createAddTodoAction(todo);
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = createRemoveTodoAction(id);
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = createToggleTodoAction(id);
    dispatch(action);
  };

  return { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo };
};
