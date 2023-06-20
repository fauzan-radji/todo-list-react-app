import React from "react";

const importances = [
  {
    text: "no importance",
    border: "border-primary-500",
  },
  {
    text: "very unimportant",
    border: "border-veryUnimportant-500",
  },
  {
    text: "unimportant",
    border: "border-unimportant-500",
  },
  {
    text: "medium",
    border: "border-medium-500",
  },
  {
    text: "important",
    border: "border-important-500",
  },
  {
    text: "very important",
    border: "border-veryImportant-500",
  },
];

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { importance: importances[props.importance] };
  }

  render() {
    return (
      <div
        className={`Todo rounded-md border-l-4 bg-primary-800 ${this.state.importance.border} py-2 pl-3 pr-4`}
      >
        <label
          className="flex items-center gap-3"
          htmlFor={`checkbox-${this.props.id}`}
        >
          <input
            type="checkbox"
            className="peer h-4 w-4 flex-shrink-0 appearance-none rounded-md border border-accent bg-transparent checked:bg-accent"
            id={`checkbox-${this.props.id}`}
          />
          <h1 className="truncate text-xl font-bold peer-checked:line-through">
            {this.props.title}
          </h1>
        </label>
      </div>
    );
  }
}
