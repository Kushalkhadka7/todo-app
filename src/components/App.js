import React, { Component } from 'react';

import '../assets/css/App.css';
import Completed from './Completed';
import Incomplete from './Incomplete';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      inputValue: '',
      isEdited: false,
      completedTodo: [],
      isCompleted: false,
      isHomeTodoVisible: true,
      isCompleteTodoVisible: false,
      isIncompleteTodoVisible: false
    };
  }

  handleComponentRender = text => {
    switch (text) {
      case 'home':
        this.setState({
          isHomeTodoVisible: true,
          isCompleteTodoVisible: false,
          isIncompleteTodoVisible: false
        });
        break;
      case 'completed':
        this.setState({
          isHomeTodoVisible: false,
          isCompleteTodoVisible: true,
          isIncompleteTodoVisible: false
        });
        break;
      case 'incomplete':
        this.setState({
          isHomeTodoVisible: false,
          isCompleteTodoVisible: false,
          isIncompleteTodoVisible: true
        });
        break;
      default:
        this.setState({
          renderHome: true
        });
    }
  };

  submitInput = e => {
    e.preventDefault();
    let value = this.state.inputValue;
    let date = Date.now().toLocaleString();
    let updatedTodo = [...this.state.todoList];
    if (value !== '') {
      if (e.keyCode === 13 || e.type === 'click') {
        updatedTodo.unshift({
          todo: value,
          date: date,
          isCompleted: false
        });
        this.setState({
          todoList: updatedTodo,
          inputValue: ''
        });
      }
    } else {
      alert('nothing');
    }
  };

  handleDelete = index => {
    let updatedTodo = [...this.state.todoList];
    updatedTodo.splice(index, 1);
    this.setState({
      todoList: updatedTodo
    });
  };

  handleSelected = (bool, index) => {
    bool = !bool;
    let updatedTodo = [...this.state.todoList];
    updatedTodo[index].isCompleted = bool;
    this.setState({
      todoList: updatedTodo
    });
  };

  handleTextChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleEdition = index => {
    let updatedTodo = [...this.state.todoList];

    //code to edit todo
  };

  render() {
    return (
      <div className="container todo-container">
        <HeaderComponent />
        <NavComponent handleComponent={this.handleComponentRender} />
        {this.state.isHomeTodoVisible && (
          <HomeComponent
            inputValue={this.state.inputValue}
            submitInput={this.submitInput}
            handleTextChange={this.handleTextChange}
            todo={this.state.todoList}
            handleDelete={this.handleDelete}
            handleSelected={this.handleSelected}
            isEdited={this.state.isEdited}
            handleEdition={this.handleEdition}
          />
        )}
        {this.state.isCompleteTodoVisible && (
          <Completed todo={this.state.todoList} />
        )}
        {this.state.isIncompleteTodoVisible && (
          <Incomplete todo={this.state.todoList} />
        )}
      </div>
    );
  }
}

export default App;
