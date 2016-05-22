/**
 * Author: Denzil Brade
 */

// Dev Dependencies
import React from 'react';

  class TodoListItem extends React.Component {

    constructor(props) {
      super();

      this.state = {
        isEditing: false
      }
    }

    /**
     * Events
     * [Handling our onChange Events]
     * [Handling our click Events]
     */

    onEditClick(e) {
      this.setState({isEditing: true});
    }

    onCancelClick(e) {
      this.setState({isEditing: false});
    }

    onSaveClick(e) {
      e.preventDefault();

      // oldTask = existing task
      const oldTask = this.props.task;
      // newTask = new updated value
      const newTask = this.refs.editInput.value;
      // Run saveTask function
      this.props.saveTask(oldTask, newTask);
      this.setState({ isEditing: false });
    }

    onTaskChange(e) {
      this.setState({task: e.target.value});
    }

    /**
     * Selective Render Section
     * [Render Alternate Views Depending on the state of our item]
     */

    renderTaskSection() {
      // Props past down via TodoList {...item}
      const { task, isCompleted, isChecked } = this.props;

      /* Add some styling dynamically depenending if task is completed or not.
      if completed is true color green otherwise gray */
      const taskStyle = {
        color: isCompleted ? '#26a69a' : 'gray',
        cursor: 'pointer'
      }

      // VIEW Tasks if editing item
      if (this.state.isEditing) {
        return (
          <span>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="todoInput-onEdit" type="text" ref="editInput" defaultValue={task} />
            </form>
          </span>
        );
      }

      // VIEW Tasks default
      return (
        <span className="todo-taskContent" style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
          <input type="checkbox" checked={this.props.isChecked} />
          <label className="defaultCheckbox" for="test5"></label>{task}
        </span>
      );
    }

    renderActionSection() {

      // VIEW Buttons if editing
      if (this.state.isEditing) {
        return (
          <span className="todoListItem-buttons">
            <button className="task-saveButton btn" onClick={this.onSaveClick.bind(this)}>Save</button>
            <button className="task-cancelButton btn" onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </span>
        );
      }

      // VIEW Buttons default
      return (
        <span className="todoListItem-buttons">
          <button className="task-EditButton btn" onClick={this.onEditClick.bind(this)}>Edit Item</button>
          <button className="task-deleteButton btn" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete Item</button>
        </span>
      );
    }

    /**
     * RENDER list items
     * @return {[JSX]} [Render Our sections based on the state of our items]
     */
    render() {
      return (
        <li>
            {this.renderTaskSection()}
            {this.renderActionSection()}
        </li>
      )
    }
  }

export default TodoListItem;
