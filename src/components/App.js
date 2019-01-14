import React, { Component } from 'react';
import { Spring as ReactSpring } from 'react-spring';

import Nav from './Nav';
import Header from './Header';
import '../assets/css/App.css';
import TodoHome from './TodoHome';
import * as todoService from '../services/todo';
import CompletedTodoLists from './CompletedTodoLists';
import InCompleteTodoList from './InCompleteTodoList';

/**
 * @class App =>container for all other componentes
 * handles states for all child components
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isEdited: false,
      editIndex: null,
      valueToSearch: '',
      inputTodoValue: '',
      editedTodoValue: '',
      isTodoCompleted: false,
      isTodoHomeVisible: true,
      isCompleteTodoVisible: false,
      isIncompleteTodoVisible: false
    };
    this.originalTodoList = null;
    this.tempStorageForEdit = null;
  }

  /**
   * @memberof App
   * fetch data from api
   */
  componentDidMount() {
    todoService
      .fetchTodos()
      .then(todoList => {
        this.setState({ todoList });
      })
      .catch(error => error);
  }

  /**
   * @memberof App
   * determines which component to render in the Dom
   * changes the flags based on the input text from nav component
   * @param text => text to render components
   */
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

  /**
   * @memberof App
   * add new todo to the todoList array
   * saves the added todo to the api
   * @param event => click or submit event after the todo text is completed
   * if todo is empty it doesnt allow to call the api
   */
  addTodo = event => {
    event.preventDefault();
    let value = this.state.inputTodoValue;
    let date = new Date().toISOString();
    if (value !== '') {
      if (event.keyCode === 13 || event.type === 'click') {
        let toBeSavedTodo = {
          id: Date.now(),
          todo: value,
          isEditedTodo: false,
          isTodoCompleted: false,
          date: date
        };
        todoService
          .addTodosToStore(toBeSavedTodo)
          .then(data => {
            this.setState({
              todoList: [...this.state.todoList, data.data],
              inputTodoValue: ''
            });
          })
          .catch(error => error);
      }
    } else {
      alert('please input the todo');
    }
  };

  /**
   * @memberof App
   * deletes a particular  todo from the todolist array uisng the index
   * sends the object to be deleted to the api
   * @param {index}=>index of object to be deleted
   */
  deleteTodo = (index, value) => {
    let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    let obj = todoListCopy[index];
    todoService
      .deleteTodoFromStore(index, obj)
      .then(data => {
        todoListCopy.splice(index, 1);
        this.setState({
          todoList: todoListCopy
        });
      })
      .catch(error => error);
  };

  /**
   * @memberof App
   * marks the todo is completed using checkbox
   * @param {index}=>index of the object in array which is to be marked completed or not
   */
  markTodoComplete = (value, index) => {
    let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    let obj = todoListCopy[index];
    obj.isTodoCompleted = !obj.isTodoCompleted;
    todoService
      .markTodoCompleteInStore(obj)
      .then(data => {
        todoListCopy[index] = data.data;
        this.setState({
          todoList: todoListCopy
        });
      })
      .catch(error => error);
  };

  handleTextChange = event => {
    this.setState({
      inputTodoValue: event.target.value
    });
  };

  /**
   * @memberof App
   * edit the todo text using the index
   * @param {index}=> index of object which edit field is to be toggled
   * edit the todo in api
   */
  editTodo = index => {
    let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    todoListCopy[index].isEditedTodo = !todoListCopy[index].isEditedTodo;
    if (!todoListCopy[index].isEditedTodo) {
      todoService.editTodo(todoListCopy[index]);
    }
    this.setState({
      todoList: todoListCopy
    });
  };

  /**
   * @memberof App
   * handles changes to the edited text form edit input field of todo
   * @param {value} = current todo text
   * @param {index} = index of object which todo text is to be eidited
   * @param {event} => event from the edit input field
   */
  handleChange = (value, index, event) => {
    let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    todoListCopy[index].todo = event ? event.target.value : value;
    this.setState({
      todoList: todoListCopy
    });
  };

  /**
   * @memberof App
   * search the todo from the todo list array and also in api
   * @param {event} => event form the search text input field
   */
  searchTodoFromTodoList = event => {
    let value = event.target.value;
    let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    this.setState({ valueToSearch: value });
    if (true) {
      todoService
        .searchTodosFromStore(this.state.valueToSearch)
        .then(data => {
          todoListCopy = data.data;
          this.setState({ todoList: todoListCopy });
        })
        .catch(error => error);
    }
  };

  /**
   * @memberof App
   * store the value of the list of todos in state
   */
  storeTodoList = () => {
    this.setState({ todoList: this.originalTodoList });
  };

  /**
   * @returns => components based on the current active flags
   * pass states and functions as props to their respective components
   * @memberof App
   */
  render() {
    return (
      <ReactSpring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {props => (
          <div style={props} className="container todo-container">
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
                markTodoComplete={this.markTodoComplete}
                handleTextChange={this.handleTextChange}
                inputTodoValue={this.state.inputTodoValue}
                editedTodoValue={this.state.editedTodoValue}
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
                markTodoComplete={this.markTodoComplete}
                handleTextChange={this.handleTextChange}
                inputTodoValue={this.state.inputTodoValue}
                editedTodoValue={this.state.editedTodoValue}
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
                markTodoComplete={this.markTodoComplete}
                inputTodoValue={this.state.inputTodoValue}
                editedTodoValue={this.state.editedTodoValue}
              />
            )}
          </div>
        )}
      </ReactSpring>
    );
  }
}

export default App;
