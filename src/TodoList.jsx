import { useRef, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["spesa", "pulizia", "work"]);
  const inputRef = useRef();

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const eventHandler = () => {
    const newTodo = inputRef.current.value;
    handleAddTodo(newTodo);
  };

  const handleReset = () => {
    setTodos([]);
  };

  const removeTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="flex flex-row gap-2 mb-3">
        <input className="bb bg-slate-300" type="text" ref={inputRef} />
        <button className="bg-green-500 rounded-lg" onClick={eventHandler}>
          Add Todo
        </button>
        <button className="bg-red-500 rounded-lg" onClick={handleReset}>
          Reset
        </button>
      </div>
      <ul className="flex flex-col gap-2  ">
        {todos.map((todo, index) => (
          <li
            className="flex flex-col gap-6 bg-slate-300 rounded text-center"
            key={index}>
            {todo}
            <button className="bg-red-500  " onClick={() => removeTask(index)}>
              remove task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
