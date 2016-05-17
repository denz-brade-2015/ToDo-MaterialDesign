/**
 * Author: Denzil Brade
 */

// Dev Dependencies
import _ from 'lodash';
import React from 'react';

// My Components
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {

    renderItems() {
      // leave out props we dont want to include in this vairable ( We are passing items props down already seperately )
      const props = _.omit(this.props, 'items');

      // Lodash > _.map Iterate over each Item in the array passing down our props via JSX Spread method {...foo}
      return _.map(this.props.items, (item, index) => <TodoListItem key={index} {...item} {...props} />)
    }

    /**
     * RENDER List
     * @return {[JSX]} [description: Returns our list <ul> and is parent to the individual List items]
     */
    render() {
      return (
        <ul className="todoApp-list">
          {this.renderItems()}
        </ul>
      )
    }
  }

export default TodoList;
