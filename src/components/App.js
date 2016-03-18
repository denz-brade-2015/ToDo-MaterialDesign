// Dev Dependencies
import React from 'react';
import {Link}  from 'react-router';
import packageJSON from '../../package.json';

// Firebase
import Rebase from 're-base';
var base = Rebase.createClass('https://todo-materialdesign.firebaseio.com/');

  class App extends React.Component {

    // Set Default state on todo items & input text field
    constructor(props) {
      super();

      this.state = {
        items: [],
        text: '',
      }
    }

    // Update ((Text State)) as input changes
    onChange(e) {
      this.setState({text: e.target.value});
    }

    // Add ((Text State)) & ID to create an Item. Add this to ((Item State))
    handleSubmit(e) {
      e.preventDefault();
      var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
      var nextText = '';
      // Update ((Item state)) & clear ((Text state)) ready for the next input
      this.setState({items: nextItems, text: nextText});
    }

    render() {
      const AppVersion = packageJSON.appVersion;
      const Backend = packageJSON.backend;

      return (
        <div>
          <header>
            <h1>Material ToDo {AppVersion}</h1>
            <Link to="/about">About</Link>
            <Link to="/poweredby">Powered by ' {Backend} '</Link>
          </header>

          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.onChange.bind(this)} value={this.state.text} />
            <button>{'Add #' + (this.state.items.length + 1)}</button>
          </form>
        </div>
      );
    }
  }

  // Render Todo List Component
  class TodoList extends React.Component {
    render() {
      var createItem = function(item) {
        return <li key={item.id}>{item.text}</li>;
      };
      return <ul>{this.props.items.map(createItem)}</ul>;
    }
  }



export default App;
