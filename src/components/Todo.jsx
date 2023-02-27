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
        border: "border-green-500",
      },
      {
        text: "unimportant",
        border: "border-lime-500",
      },
      {
        text: "medium",
        border: "border-yellow-500",
      },
      {
        text: "important",
        border: "border-orange-500",
      },
      {
        text: "very important",
        border: "border-red-500",
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
