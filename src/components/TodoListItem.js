import React from 'react';

  class TodoListItem extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        text: this.props.item.text,
        done: this.props.item.done
      }
    }

    render() {
      return (
        <div>
          <span>
            <input
              type= "checkbox"
              checked={ this.state.done }
              />
            </span>

            <input
              type="text"
              value={ this.state.text }
              />

            <span><button>Delete</button></span>
        </div>
      )
    }

    handleDoneChange(event) {
        var update = { done: event.target.checked }
        this.setState(update);
    }
  }

  export default TodoListItem;
