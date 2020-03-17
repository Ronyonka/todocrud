import  axios from 'axios';
import { GET_TODOS, DELETE_TODO } from './types';

// GET TODOS
export const getTodos = () => async dispatch => {
    const res = await axios.get('/api/todos/');
    dispatch({
        type: GET_TODOS,
        payload: res.data
    });
};

// DELETE TODO
export const deleteTodo = id => async dispatch => {
    await axios.delete(`/api/todos/${id}/`);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
    history.push('/');
  };