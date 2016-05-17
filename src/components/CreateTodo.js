/**
 * Author: Denzil Brade
 */

// Dev Dependencies
import React from 'react';

class CreateItem extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        error: null
      };
    }

    /**
     * Validation
     * [Handle our Basic form validation]
     */

    renderError() {
      // if there is no error, don't return nothing
      if (!this.state.error) { return null; }
      // Otherwise return a error message
      return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    validateInput(task) {
      // If task field has been submitted without a value throw error
      if (!task) {
        return 'Please enter a task.';
        // If task already exists throw error
      } else if (_.find(this.props.items, item => item.task === task)) {
        return 'Task already exists.';
      } else {
        return null;
      }
    }

    /**
     * Events
     * [Handling our Form Submit Event]
     */

    handleSubmit(e) {
      e.preventDefault();

      // declare our vars/consts
      const createInput = this.refs.createInput;
      const task = createInput.value;
      const validateInput = this.validateInput(task);

      /* If validationInput is called, set the state message to
      the error messages we declared in validateInput */
      if (validateInput) {
        this.setState({ error: validateInput });
        return;
      }
      // if no error state remains null
      this.setState({ error: null });
      // run the createTask Func passed down from App.js
      this.props.createTask(task);
      // Reset the input field to empty
      this.refs.createInput.value = '';
    }

    /**
     * RENDER Our Input form
     * @return {[JSX]} [description: view for the input form & create button]
     */
    render() {
      return (

        <form className="createTodo-inputForm" onSubmit={this.handleSubmit.bind(this)}>
          <input className="createTodo-input" placeholder="Enter task here..." type="text" ref="createInput" />
          <button className="btn waves-effect waves-light createTodo-button todo-btn btn">Create</button>
          {this.renderError()}
        </form>
      )
    }
  }

  export default CreateItem;
