import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <Link to={`/lists/${props.id}`}>
      <div className="flex-1 rounded-md border border-accent px-4 py-2">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p className="py-2 text-sm text-primary-100">{props.description}</p>
      </div>
    </Link>
  );
}
