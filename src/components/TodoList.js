import React from 'react';
import TodoListItem from './ToDoListItem';

  class TodoList extends React.Component {

    // Render Component
    render() {
      return (
        <div>
          {console.log(this.props.items)}
          { this.renderList() }
        </div>
      )
    }

    renderList() {
      if (this.props.items === [0]) {
        return <h4>
            Add a todo to get started.
        </h4>
      } else {
        var children = [];

        for (var key in this.props.items) {
          var item = this.props.items[key];
          item.key = key;

          children.push(
            <ToDoListItem item ={item} key ={key} />
          )
        }

      return children;
      }
    }
  };

export default TodoList;
