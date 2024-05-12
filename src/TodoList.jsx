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
        <input type="text" ref={inputRef} />
        <button className="bg-green-500 rounded-lg" onClick={eventHandler}>
          Add Todo
        </button>
        <button className="bg-red-600 rounded-lg" onClick={handleReset}>
          Reset
        </button>
      </div>
      <ul className="flex flex-col gap-2 bg-slate-400">
        {todos.map((todo, index) => (
          <li className="flex flex-row gap-4" key={index}>
            {todo}
            <button
              className="bg-slate-500 rounded-lg"
              onClick={() => removeTask(index)}>
              remove task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
