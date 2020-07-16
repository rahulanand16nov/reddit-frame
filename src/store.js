import { createStore } from 'redux';
import reducer from './reducers';
import postData from './postData.json';

const initialState = {posts: postData};
export default createStore(reducer, initialState);