import Todo from "../components/Todo";

export default function Todos() {
  return (
    <div className="flex flex-col gap-4">
      <Todo
        title="Very High Priority"
        description="Very High Priority Descriptions"
        importance="5"
        deadline="28/02/2023"
      />
      <Todo
        title="High Priority"
        description="High Priority Descriptions"
        importance="4"
        deadline="28/02/2023"
      />
      <Todo
        title="Medium Priority"
        description="Medium Priority Descriptions"
        importance="3"
        deadline="28/02/2023"
      />
      <Todo
        title="Low Priority"
        description="Low Priority Descriptions"
        importance="2"
        deadline="03/03/2023"
      />
      <Todo
        title="Very Low Priority"
        description="Very Low Priority Descriptions"
        importance="1"
        deadline="28/02/2023"
      />
      <Todo
        title="None Priority"
        description="None Priority Descriptions"
        importance="0"
        deadline="28/02/2023"
      />
    </div>
  );
}
