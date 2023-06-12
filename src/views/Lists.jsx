import { useEffect, useState } from "react";
import List from "../components/List";

const endpoint = `http://${window.location.hostname}:${process.env.REACT_APP_API_PORT}`;

export default function Lists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(endpoint + "/lists")
      .then((response) => response.json())
      .then((lists) => {
        setLists(lists);
      });
  }, []);

  return (
    <div>
      <h1 className="mb-3 text-4xl font-bold">Lists</h1>

      <div className="flex flex-col gap-3">
        {lists.map((list) => {
          return (
            <List
              key={list.id}
              id={list.id}
              title={list.title}
              description={list.description}
            />
          );
        })}
      </div>
    </div>
  );
}
