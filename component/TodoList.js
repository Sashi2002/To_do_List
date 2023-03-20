import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center">
          <span>{todo.text}</span>
          <button className="p-2 text-[#9333EA] h-10 w-10 " id="id">
            <MdOutlineDelete className="h-full w-full" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
