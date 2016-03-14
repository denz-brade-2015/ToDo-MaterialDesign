import React from 'react';
import TodoListItem from './ToDoListItem';

  class TodoList extends React.Component {

    // Create Todo with a key prop & a text value
    createItem() {
      return <li key={ item.id }> { item.text }</li>
    }

    // Check if any Todo items exist Return a prompt to add or existing items
    renderList() {
      if (!this.props.items) {
        return <h4>
            Add a todo to get started.
        </h4>
      } else {
        return <ul>{ this.props.items.map(createItem) }</ul>;
      }
    }

    // Render Component
    render() {
      return (
        <div>
          {console.log('ToDo is rendering')}
          { this.renderList() }
        </div>
      )
    }
  };

export default TodoList;
