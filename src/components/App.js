import React, { Component } from 'react';

import Nav from './Nav';
import Header from './Header';
import '../assets/css/App.css';
import TodoHome from './TodoHome';
import CompletedTodoLists from './CompletedTodoLists';
import InCompleteTodoList from './InCompleteTodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isEdited: false,
      editIndex: null,
      inputTodoValue: '',
      isTodoCompleted: false,
      isTodoHomeVisible: true,
      isCompleteTodoVisible: false,
      isIncompleteTodoVisible: false
    };
    this.originalTodoList = null;
    this.tempStorageForEdit = null;
  }

  //determines which component to render in the Dom
  handleComponentRender = text => {
    switch (text) {
      case 'renderTodoHome':
        this.setState({
          isTodoHomeVisible: true,
          isCompleteTodoVisible: false,
          isIncompleteTodoVisible: false
        });
        break;
      case 'renderCompletedTodoLists':
        this.setState({
          isTodoHomeVisible: false,
          isCompleteTodoVisible: true,
          isIncompleteTodoVisible: false
        });
        break;
      case 'renderIncompleteTodoLists':
        this.setState({
          isTodoHomeVisible: false,
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

  //add new todo to the todoList array
  addTodo = event => {
    event.preventDefault();
    let value = this.state.inputTodoValue;
    let date = new Date().toLocaleString();
    let todoListCopy = [...this.state.todoList];
    if (value !== '') {
      if (event.keyCode === 13 || event.type === 'click') {
        todoListCopy.unshift({
          id: Date.now(),
          todo: value,
          date: date,
          isTodoCompleted: false
        });
        this.setState({
          todoList: todoListCopy,
          inputTodoValue: ''
        });
      }
    } else {
      alert('nothing');
    }
  };

  //deletes a particular index todo from the todolist array
  deleteTodo = index => {
    let todoListCopy = [...this.state.todoList];
    todoListCopy.splice(index, 1);
    this.setState({
      todoList: todoListCopy
    });
  };

  //marks the todo is completed using checkbox
  markTodoComplete = (bool, index) => {
    bool = !bool;
    let todoListCopy = [...this.state.todoList];
    todoListCopy[index].isTodoCompleted = bool;
    this.setState({
      todoList: todoListCopy
    });
  };

  handleTextChange = event => {
    this.setState({
      inputTodoValue: event.target.value
    });
  };

  //edit the todo text using the index
  editTodo = index => {
    if (index === this.state.editIndex) {
      index = null;
    }
    this.setState(prevState => ({
      isEdited: !prevState.isEdited,
      editIndex: index
    }));
  };

  handleChange = (value, index, e) => {
    let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    todoListCopy[index].todo = e ? e.target.value : value;
    this.setState({
      todoList: todoListCopy
    });
  };

  //search the todo from the todo list array
  searchTodoFromTodoList = event => {
    if (this.originalTodoList.length !== 0) {
      let value = event.target.value;
      let todoListCopy = this.originalTodoList.map(data => data);
      let filteredTodoList = todoListCopy.filter(
        filteredTodo =>
          filteredTodo.todo.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      this.setState({
        todoList: filteredTodoList
      });
    }
  };

  storeTodoList = () => {
    this.setState({ todoList: this.originalTodoList });
  };

  render() {
    return (
      <div className="container todo-container">
        <Header />
        <Nav handleComponentRender={this.handleComponentRender} />
        <input
          type="text"
          placeholder="search"
          value={this.state.searchText}
          className="form-control search-text-box"
          onBlur={this.storeTodoList}
          onChange={event => this.searchTodoFromTodoList(event)}
          onFocus={event => (this.originalTodoList = this.state.todoList)}
        />
        {this.state.isTodoHomeVisible && (
          <TodoHome
            addTodo={this.addTodo}
            editTodo={this.editTodo}
            todos={this.state.todoList}
            deleteTodo={this.deleteTodo}
            isEdited={this.state.isEdited}
            editIndex={this.state.editIndex}
            handleChange={this.handleChange}
            handleTextChange={this.handleTextChange}
            inputTodoValue={this.state.inputTodoValue}
            markTodoComplete={this.markTodoComplete}
          />
        )}
        {this.state.isCompleteTodoVisible && (
          <CompletedTodoLists
            addTodo={this.addTodo}
            editTodo={this.editTodo}
            todos={this.state.todoList}
            deleteTodo={this.deleteTodo}
            isEdited={this.state.isEdited}
            editIndex={this.state.editIndex}
            handleTextChange={this.handleTextChange}
            inputTodoValue={this.state.inputTodoValue}
            markTodoComplete={this.markTodoComplete}
          />
        )}
        {this.state.isIncompleteTodoVisible && (
          <InCompleteTodoList
            addTodo={this.addTodo}
            editTodo={this.editTodo}
            todos={this.state.todoList}
            deleteTodo={this.deleteTodo}
            isEdited={this.state.isEdited}
            editIndex={this.state.editIndex}
            handleTextChange={this.handleTextChange}
            inputTodoValue={this.state.inputTodoValue}
            markTodoComplete={this.markTodoComplete}
          />
        )}
      </div>
    );
  }
}

export default App;
