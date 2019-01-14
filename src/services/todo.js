import http from '../utils/http';
import API from '../constants/api';

/**
 * @param {todo} => todo object
 * maps the value of from api with currently displayed todos
 */
const mapResponseToTodo = todo => ({
  ...todo,
  todo: todo.todo
});

/**
 * @param {todo} => todo object
 * maps the value of from frontend with value of todo in api
 */
const mapTodoToResponse = todo => ({
  ...todo,
  description: todo.todo
});

/**
 * fetch all todos from the api
 */
export async function fetchTodos() {
  try {
    let data = await http.get(API.TODOS);
    data = data.data.map(item => mapResponseToTodo(item));
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}

/**
 * add todos to the store using api
 */
export async function addTodosToStore(toBeAdded) {
  try {
    let data = mapTodoToResponse(toBeAdded);
    data = await http.post(API.TODOS, data);
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}

/**
 * delete specific todo in the store using the todo obj id
 */
export async function deleteTodoFromStore(index, obj) {
  try {
    let data = await http.delete(API.TODOS + `/${obj.id}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * mark specific todo complete or incomplete in the store
 */
export async function markTodoCompleteInStore(obj) {
  try {
    let data = await http.put(API.TODOS + `/${obj.id}`, { ...obj });
    console.log(data);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * search todos in the store
 */
export async function searchTodosFromStore(searchText) {
  try {
    let data = await http.get(`${API.TODOS}?q=${searchText}&limit=7`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * edit specific todo text in the store
 */
export async function editTodo(obj) {
  try {
    let data = await http.put(API.TODOS + `/${obj.id}`, { ...obj });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
