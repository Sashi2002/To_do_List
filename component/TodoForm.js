import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex justify-between items-center rounded-lg">
        <input
          placeholder="Add todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-[#F3F3F3] p-2 w-60 rounded-l-lg outline-none"
        />
        <button className="rounded-r-lg bg-[#F3F3F3] p-2 text-[#9333EA] h-10 w-10">
          <AiFillPlusCircle className="h-full w-full" />
        </button>
      </label>
    </form>
  );
};

export default TodoForm;
