import _ from 'lodash';
import React from 'react';

// My Components
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {

    renderItems() {
      // leave out props we dont want to include in this vairable
      const props = _.omit(this.props, 'items');

      return _.map(this.props.items, (item, index) => <TodoListItem key={index} {...item} {...props} />)
    }

    render() {
      var checkBoxHandle = this.props.handleCheckBox

      return (
        <ul className="todoApp-list">
          {this.renderItems()}
        </ul>
      )
    }
  }

export default TodoList;
