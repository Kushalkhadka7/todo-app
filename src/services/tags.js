import http from '../utils/http';
import API from '../constants/api';

/**
 * @returns Tags form api.
 */
export async function fetchTags() {
  try {
    let data = await http.get(API.TAGS);

    data = data.data;

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @param {Object} obj
 * @returns Added data to the api.
 */
export async function addTags(obj) {
  try {
    const data = await http.post(API.TAGS, obj);

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @param {Number} id
 * @returns
 */
export async function deleteTags(id) {
  try {
    const data = await http.delete(API.TAGS + `/${id}`);

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * @param {Object} obj
 * @returns Edited tags object from api.
 */
export async function editTag(obj) {
  try {
    const data = await http.put(API.TAGS + `/${obj.id}`, { ...obj });
    
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
