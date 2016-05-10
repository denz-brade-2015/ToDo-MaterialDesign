import React from 'react';

// Render Todo ListItem Component
  class TodoListItem extends React.Component {

    // Set Default state on todo items & input text field
    constructor(props) {
      super();

      this.state = {
        isEditing: false
      }
    }

    renderTaskSection() {
      // Props past down via ToDoList ...item
      const { task, isCompleted, isChecked } = this.props;
      const taskStyle = {
        color: isCompleted ? 'green' : 'red', // if completed is true color green otherwise red
        cursor: 'pointer'
      }

      if (this.state.isEditing) {
        return (
          <span>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="todoInput-onEdit" type="text" ref="editInput" defaultValue={task} />
            </form>
          </span>
        );
      }

      // TODO Make Checkbox & color change share the same state instance on click/change
      return (
        <span className="todo-taskContent" style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
          <input type="checkbox" checked={this.props.isChecked} />
          {task}
        </span>
      );
    }

    renderActionSection() {
      if (this.state.isEditing) {
        return (
          <span className="todoListItem-buttons">
            <button className="task-saveButton btn" onClick={this.onSaveClick.bind(this)}>Save</button>
            <button className="task-cancelButton btn" onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </span>
        );
      }

      return (
        <span className="todoListItem-buttons">
          <button className="task-EditButton btn" onClick={this.onEditClick.bind(this)}>Edit Item</button>
          <button className="task-deleteButton btn" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete Item</button>
        </span>
      );
    }

    handleCheckBox(e) {
      this.setState({done: e.target.checked});
    }

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
