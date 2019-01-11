import http from '../utils/http';
import API from '../constants/api';

const mapResponseToTodo = todo => ({
  ...todo,
  todo: todo.description
});

export async function fetchTodos() {
  try {
    let data = await http.get(API.TODOS);
    data = data.data.map(item => mapResponseToTodo(item));
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
}
