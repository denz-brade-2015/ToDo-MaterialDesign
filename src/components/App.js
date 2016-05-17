/**
 * Author: Denzil Brade
 */

// Dev Dependencies
import _ from 'lodash';
import React from 'react';
import {Link}  from 'react-router';
import packageJSON from '../../package.json';

// My Components
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

// Temporary data to start with
const items = [
{
  task: 'Make React tutorial',
  isCompleted: true,
  isChecked: true
},
{
  task: 'Watch Game of Thrones',
  isCompleted: false,
  isChecked: false
},
{
  task: 'Write up blog post',
  isCompleted: false,
  isChecked: false
},
];

  class App extends React.Component {

    // Set Default state on todo items & input text field
    constructor(props) {
      super();

      this.state = {
        items
      };
    }

    // When tasks are created push the following props to each task's state
    createTask(task) {
      this.state.items.push({
        task: task, // es6 task,
        isCompleted: false,
        isChecked: false
      });
      // Update state of our items
      this.setState({ items: this.state.items });
    }

    toggleTask(task) {
      // Lodash > _.find, finds the first matching item in the array that matches the condition we set
      const foundTodo = _.find(this.state.items, item => item.task === task);

      // Toggle state when selected/checked
      foundTodo.isCompleted = !foundTodo.isCompleted;
      foundTodo.isChecked = !foundTodo.isChecked;
      // Update state of our items after toggle
      this.setState({ items: this.state.items });
    }

    saveTask(oldTask, newTask) {
      // find this task it refers to oldTask
      const foundTodo = _.find(this.state.items, item => item.task === oldTask);
      // replace the oldTask with the new values
      foundTodo.task = newTask;
      // Update the state of our items with the newTask data
      this.setState({ items: this.state.items });
    }

    deleteTask(taskToDelete) {
      // removes the selected item from the array of 'items'
      _.remove(this.state.items, item => item.task === taskToDelete);
      // Update the state with new list of array items
      this.setState({ items: this.state.items });
    }

    /**
     * RENDER Our App
     * @return {[JSX]} [description: view for our app including our child components]
     */
    render() {
      const AppVersion = packageJSON.appVersion;

      return (
        <div>
          <header>
            <h1>Material ToDo {AppVersion}</h1>
            <Link to="/about">About</Link>
          </header>

          <div className="todoApp-wrapper">
            <h3>Create Todo</h3>
            <CreateTodo items={this.state.items} createTask={this.createTask.bind(this)}/>
            <TodoList
              items={this.state.items}
              toggleTask={this.toggleTask.bind(this)}
              saveTask={this.saveTask.bind(this)}
              deleteTask={this.deleteTask.bind(this)}
            />
          </div>
        </div>
      );
    }
  }

export default App;
