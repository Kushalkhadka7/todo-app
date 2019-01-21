import React, { Component } from 'react';
import { Spring as ReactSpring } from 'react-spring';

import Nav from './Nav';
import Header from '../Header';
import '../../assets/css/App.css';
import TodoHome from './TodoHome';
import * as todoService from '../../services/todo';
import CompletedTodoLists from './CompletedTodoLists';
import InCompleteTodoList from './InCompleteTodoList';

/**
 * @class App
 * @param {Object} event
 * @augments {Component}
 */
class App extends Component {
  /**
   * Creates an instance of App.
   *
   * @param {*} props
   * @memberof App
   * .
   */
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isEdited: false,
      editIndex: null,
      valueToSearch: '',
      inputTodoValue: '',
      editedTodoValue: null,
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
   * Fetch data from api.
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
   * determines which component to render in the Dom.
   * changes the flags based on the input text from nav component.
   * @param {String}  text
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
   * Add new todo to the todoList array.
   * Saves the added todo to the api.
   * @param {Object} event
   * Click or submit event after the todo text is completed.
   * If todo is empty it doesnt allow to call the api.
   */
  addTodo = event => {
    event.preventDefault();
    const value = this.state.inputTodoValue;
    const date = new Date().toISOString();

    if (value !== '') {
      if (event.keyCode === 13 || event.type === 'click') {
        const toBeSavedTodo = {
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
   * Deletes a particular  todo from the todolist array uisng the index.
   * Sends the object to be deleted to the api.
   * @param {Number} index
   * Index of object to be deleted.
   */
  deleteTodo = index => {
    const todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    const obj = todoListCopy[index];

    todoService
      .deleteTodoFromStore(index, obj)
      .then(() => {
        todoListCopy.splice(index, 1);
        this.setState({
          todoList: todoListCopy
        });
      })
      .catch(error => error);
  };

  /**
   * @memberof App
   * Marks the todo is completed using checkbox.
   * @param {Object} value
   * @param {Number} index
   * Index of the object in array which is to be marked completed or not.
   */
  markTodoComplete = (value, index) => {
    const todoListCopy = this.state.todoList.map(todo => ({ ...todo }));
    const obj = todoListCopy[index];

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
   * @param {Number} index
   * Index of object which edit field is to be toggled.
   * Edit the todo in api.
   */
  editTodo = index => {
    const todoListCopy = this.state.todoList.map(todo => ({ ...todo }));

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
   * Handles changes to the edited text form edit input field of todo.
   * @param {Object} value
   * @param {Number} index
   * @param {Object} event
   */
  handleChange = (value, index, event) => {
    const todoListCopy = this.state.todoList.map(todo => ({ ...todo }));

    todoListCopy[index].todo = event ? event.target.value : value;
    this.setState({
      todoList: todoListCopy
    });
  };

  /**
   * @memberof App
   * Search the todo from the todo list array and also in api.
   * @param {Object}event
   */
  searchTodoFromTodoList = event => {
    const value = event.target.value;
    // let todoListCopy = this.state.todoList.map(todo => ({ ...todo }));

    // this.setState({ valueToSearch: value });
    // todoService
    //   .searchTodosFromStore(this.state.valueToSearch)
    //   .then(data => {
    //     todoListCopy = data.data;
    //     this.setState({ todoList: todoListCopy });
    //   })
    //   .catch(error => error);

    if (value) {
      todoService
        .searchTodosFromStore(value)
        .then(data => {
          this.setState({ valueToSearch: data.data });
        })
        .catch(error => error);
    } else {
      this.setState({
        valueToSearch: null
      });
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
   * @returns => Components based on the current active flags.
   * Pass states and functions as props to their respective components.
   * @memberof App
   */
  render() {
    const todo = this.state.valueToSearch || this.state.todoList;

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
              onFocus={() => (this.originalTodoList = this.state.todoList)}
            />
            {this.state.isTodoHomeVisible && (
              <TodoHome
                addTodo={this.addTodo}
                editTodo={this.editTodo}
                todos={todo}
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
                todos={todo}
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
                todos={todo}
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
