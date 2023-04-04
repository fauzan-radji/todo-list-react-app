import List from "../components/List";

export default function Lists() {
  return (
    <div>
      <h1 className="mb-3 text-4xl font-bold">Lists</h1>

      <div className="flex flex-col gap-3">
        <List />
        <List />
      </div>
    </div>
  );
}
