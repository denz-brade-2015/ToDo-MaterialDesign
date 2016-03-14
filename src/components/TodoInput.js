import React from 'react';

  class TodoInput extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        text: ''
      }
    }

    render() {
      return (
        <div>
          <input className="todo-input" type = "text" value = {this.state.text} />
          <span>
            <button className="btn-addTodo">Add</button>
          </span>
        </div>
      )
    }
  }

  export default TodoInput;
