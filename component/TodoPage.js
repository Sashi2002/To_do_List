import React, { useState } from "react";
import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoPage;
