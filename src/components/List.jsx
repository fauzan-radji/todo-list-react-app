export default function List() {
  return (
    <div className="flex-1 rounded-md border border-accent px-4 py-2">
      <h1 className="text-xl font-bold">Judul</h1>
      <p className="py-2 text-sm text-primary-100">Description</p>

      <ul className="text-sm">
        <li className="text-veryImportant-400">list 1</li>
        <li className="text-medium-400">list 2</li>
        <li className="text-veryUnimportant-400">list 3</li>
      </ul>
    </div>
  );
}
