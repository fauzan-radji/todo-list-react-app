import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const endpoint = `http://${window.location.hostname}:${process.env.REACT_APP_API_PORT}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const { listId } = useParams();
  const input = useRef();

  useEffect(() => {
    fetch(endpoint + "/lists/" + listId + "/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, [listId]);

  async function handleOnClick(e) {
    let allTodos = await fetch(endpoint + "/todos").then((res) => res.json());
    allTodos = [...new Set([...allTodos, ...todos])];
    const lastId = Math.max(...allTodos.map((todo) => todo.id));
    const newTodos = [
      ...todos,
      {
        id: lastId + 1,
        listId,
        title: input.current.value,
        description: "",
        importance: 0,
        deadline: "04/04/2023",
      },
    ];
    setTodos(newTodos);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="Todo flex justify-between overflow-hidden rounded-md border border-accent bg-primary-800">
        <input
          type="text"
          ref={input}
          className="flex-auto bg-transparent py-2 px-3 text-xl font-bold outline-none placeholder:text-primary-200"
          placeholder="Add todo ..."
        />
        <button
          onClick={handleOnClick}
          className="block basis-16 bg-accent text-2xl font-bold text-primary-700 active:opacity-50"
        >
          +
        </button>
      </div>

      {todos
        .sort((a, b) => b.importance - a.importance)
        .map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            importance={todo.importance}
            deadline={todo.deadline}
          />
        ))}
    </div>
  );
}
