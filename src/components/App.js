import React from 'react';
import {Link}  from 'react-router';
import packageJSON from '../../package.json';

import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: {},
      text: ''
    }
  }

  render() {
    const version = packageJSON.version;

    return (
      <div>
        <header>
          <h1>React Starterify {version}</h1>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by</Link>
        </header>

        <section>
          <ToDoInput />
          <ToDoList items={this.state.items} />
          {this.props.children || 'Welcome to React Starterify'}
        </section>
      </div>
    )
  }
};

export default App;
