import React, { Component } from 'react';

import '../assets/css/App.css';
import Completed from './Completed';
import Incomplete from './Incomplete';
import NavComponent from './NavComponent';
import HomeComponent from './HomeComponent';
import HeaderComponent from './HeaderComponent';
import InputComponent from './InputHandler';

class App extends Component {
  constructor() {
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

    this.tempStorageForEdit = null;

    this.originalTodoList = null;
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
    // if (index !== this.state.editIndex && this.state.editIndex !== null) {
    //   this.handleChange(this.tempStorageForEdit, this.state.editIndex, null);
    // }
    if (index === this.state.editIndex) {
      index = null;
    }
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
      editIndex: index
    }));
    // this.tempStorageForEdit = index != null && this.state.todoList[index].todo;
  };

  handleChange = (value, index, e) => {
    let updatedTodo = [...this.state.todoList];
    updatedTodo[index].todo = e ? e.target.value : value;
    this.setState({
      todoList: updatedTodo
    });
  };

  searchTodo = e => {
    console.log(e.target.value);
    if (this.originalTodoList.length !== 0) {
      let value = e.target.value;
      let updatedTodo = this.originalTodoList.map(data => data);

      console.log(this.originalTodoList);

      let filteredTodo = updatedTodo.filter(
        v => v.todo.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      this.setState({
        todoList: filteredTodo
      });
    } else {
      console.log('list is empty');
    }
  };

  render() {
    return (
      <div className="container todo-container">
        <HeaderComponent />
        <NavComponent handleComponent={this.handleComponentRender} />
        <input
          className="form-control search-text-box"
          placeholder="search"
          type="text"
          value={this.state.searchText}
          onChange={e => this.searchTodo(e)}
          onFocus={e => (this.originalTodoList = this.state.todoList)}
          onBlur={e => {
            this.setState({ todoList: this.originalTodoList });
          }}
        />
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
            handleChange={this.handleChange}
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
