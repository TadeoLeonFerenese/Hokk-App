import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./todoList";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  // useTodo,
  // todos, handleDeleteTodo,handleToggleTodo, handleNewTodo

  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp, <small>pendientes: </small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
