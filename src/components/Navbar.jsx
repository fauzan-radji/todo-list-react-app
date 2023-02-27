import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar mb-4 border-b border-b-accent px-4">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="text-2xl font-bold">
          <Link to="/">
            Todo<span className="text-accent">List</span>
          </Link>
        </div>

        <div className="-m-4 flex">
          <Link
            to="/"
            className="p-4 text-white no-underline hover:text-accent"
          >
            Home
          </Link>
          <Link
            to="/todos"
            className="p-4 text-white no-underline hover:text-accent"
          >
            Todos
          </Link>
          <Link
            to="/settings"
            className="p-4 text-white no-underline hover:text-accent"
          >
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
}
