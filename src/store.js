import { createStore } from 'redux';
import reducer from './reducers';
import postData from './postData.json';

const initialState = 
{   posts: postData.Posts,
    current_subreddit: "Mixed"
};
export default createStore(reducer, initialState);