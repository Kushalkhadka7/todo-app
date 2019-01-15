import http from '../utils/http';
import API from '../constants/api';

/**
 * @param {Object} todo
 * Maps the value of from api with currently displayed todos.
 */
const mapResponseToTodo = todo => ({
  ...todo,
  todo: todo.todo
});

/**
 * @param {Object} todo
 * Maps the value of from frontend with value of todo in api.
 */
const mapTodoToResponse = todo => ({
  ...todo,
  description: todo.todo
});

/**
 * @returns All todos from api.
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
 * @param {Object} toBeAdded
 * @returns Response from api either the data is added or not.
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
 * @param {Number} index
 * @param {Object} obj
 * @returns
 */
export async function deleteTodoFromStore(index, obj) {
  try {
    const data = await http.delete(API.TODOS + `/${obj.id}`);

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @param {Object} obj
 */
export async function markTodoCompleteInStore(obj) {
  try {
    const data = await http.put(API.TODOS + `/${obj.id}`, { ...obj });

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @param {String}searchText
 * @returns
 */
export async function searchTodosFromStore(searchText) {
  try {
    const data = await http.get(`${API.TODOS}?q=${searchText}&limit=7`);

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @param {Object} obj
 * @returns
 */
export async function editTodo(obj) {
  try {
    const data = await http.put(API.TODOS + `/${obj.id}`, { ...obj });

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
