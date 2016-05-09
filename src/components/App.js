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
  task: 'make React tutorial',
  isCompleted: false,
  isChecked: false
},
{
  task: 'eat dinner',
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

    createTask(task) {
      this.state.items.push({
        task: task, // es6 task,
        isCompleted: false,
        isChecked: false
      });
      this.setState({ items: this.state.items });
    }

    removeAllItems(e) {
      this.setState({items: [], task: ''});
    }

    toggleTask(task) {
      // find, finds the first matching item in the array that matches the condition we set
      const foundTodo = _.find(this.state.items, item => item.task === task);

      // Toggle state when selected/checked
      foundTodo.isCompleted = !foundTodo.isCompleted;
      foundTodo.isChecked = !foundTodo.isChecked;
      // Updates the state to new value
      this.setState({ items: this.state.items });
    }

    saveTask(oldTask, newTask) {
      // find this task it refers to oldTask
      const foundTodo = _.find(this.state.items, item => item.task === oldTask);
      // replace the oldTask with the new values
      foundTodo.task = newTask;
      this.setState({ items: this.state.items });
    }

    deleteTask(taskToDelete) {
      _.remove(this.state.items, item => item.task === taskToDelete);

      this.setState({ items: this.state.items });
    }

    render() {
      const AppVersion = packageJSON.appVersion;
      const Backend = packageJSON.backend;

      return (
        <div>
          <header>
            <h1>Material ToDo {AppVersion}</h1>
            <Link to="/about">About</Link>
          </header>

          <div className="todoApp-wrapper">
            <h3>TODO</h3>
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
