import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { useParams } from "react-router-dom";

const endpoint = `http://${window.location.hostname}:${process.env.REACT_APP_API_PORT}`;

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const { listId } = useParams();

  useEffect(() => {
    fetch(endpoint + "/lists/" + listId + "/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
          importance={todo.importance}
          deadline={todo.deadline}
        />
      ))}
    </div>
  );
}
