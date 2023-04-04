import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

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
    this.state = {
      importance: importances[props.importance],
    };
  }
  render() {
    return (
      <div className="Todo flex-1 rounded-md border border-accent px-4 py-2">
        <h1 className="text-xl font-bold">{this.props.title}</h1>
        <p className="text-xs">
          <span className="text-primary-500">{this.props.deadline}</span>
          &nbsp;
          <span
            className={`rounded-md border ${this.state.importance.border} px-1`}
          >
            {this.state.importance.text}
          </span>
        </p>

        <p className="pt-2 text-sm text-primary-100">
          {this.props.description}
        </p>
      </div>
    );
  }
}
