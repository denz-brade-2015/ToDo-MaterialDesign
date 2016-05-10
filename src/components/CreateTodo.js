import React from 'react';

class CreateItem extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        error: null
      };
    }


    renderError() {
      if (!this.state.error) { return null; }

      return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
      return (

        <form className="createTodo-inputForm" onSubmit={this.handleSubmit.bind(this)}>
          <input className="createTodo-input" type="text" ref="createInput" />
          <button className="createTodo-button todo-btn btn">Create</button>
          {this.renderError()}
        </form>
      )
    }

    // Add ((Text State)) & ID to create an Item. Add this to ((Item State))
    handleSubmit(e) {
      e.preventDefault();

      const createInput = this.refs.createInput;
      const task = createInput.value;
      const validateInput = this.validateInput(task);

      if (validateInput) {
        this.setState({ error: validateInput });
        return;
      }

      this.setState({ error: null });
      this.props.createTask(task);
      this.refs.createInput.value = '';
    }

    validateInput(task) {
      if (!task) {
        return 'Please enter a task.';
      } else if (_.find(this.props.items, item => item.task === task)) {
        return 'Task already exists.';
      } else {
        return null;
      }
    }
  }

  export default CreateItem;
