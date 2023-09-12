import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoItem } from "./TodoItem";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./todoList";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo(todo) */}
          {/*{id: new Date()..., description: "", done: false  } */}
          <TodoAdd />
          {/* <form>
            <input
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form> */}
          {/* Fin TodoAdd */}
        </div>
      </div>
    </>
  );
};
