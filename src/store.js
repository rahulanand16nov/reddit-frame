import { createStore } from 'redux';
import reducer from './reducers';
import postData from './postData.json';

const initialState = 
{   posts: postData,
    current_subreddit: "popular"
};
export default createStore(reducer, initialState);