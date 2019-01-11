import React, { Component } from 'react';

import '../assets/css/App.css';
import Completed from './Completed';
import Incomplete from './Incomplete';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import * as todoService from '../services/todo';

class App extends Component {
  constructor() {
    i;
    super();
    this.state = {
      todoList: [],
      inputValue: '',
      isEdited: false,
      editIndex: null,
      completedTodo: [],
      isCompleted: false,
      isHomeTodoVisible: true,
      isCompleteTodoVisible: false,
      isIncompleteTodoVisible: false
    };
  }

  componentDidMount() {
    todoService.fetchTodos().then(todoList => {
      this.setState({ todoList });
    });
  }

  //determines which component to render in the Dom
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
    if (this.state.isEdited) {
      index = null;
    }
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
      editIndex: index
    }));
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
            editIndex={this.state.editIndex}
            handleEdition={this.handleEdition}
          />
        )}
        {this.state.isCompleteTodoVisible && (
          <Completed
            inputValue={this.state.inputValue}
            submitInput={this.submitInput}
            handleTextChange={this.handleTextChange}
            todo={this.state.todoList}
            handleDelete={this.handleDelete}
            handleSelected={this.handleSelected}
            isEdited={this.state.isEdited}
            editIndex={this.state.editIndex}
            handleEdition={this.handleEdition}
          />
        )}
        {this.state.isIncompleteTodoVisible && (
          <Incomplete
            inputValue={this.state.inputValue}
            submitInput={this.submitInput}
            handleTextChange={this.handleTextChange}
            todo={this.state.todoList}
            handleDelete={this.handleDelete}
            handleSelected={this.handleSelected}
            isEdited={this.state.isEdited}
            editIndex={this.state.editIndex}
            handleEdition={this.handleEdition}
          />
        )}
      </div>
    );
  }
}

export default App;
