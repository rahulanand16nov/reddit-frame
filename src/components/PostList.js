import React from 'react';
import './PostList.css';
import Post from './Post'

function PostList(props) {
    if(props.posts){
        return (
            props.posts.map( post => (
                <li className='postlist_item'>
                    <Post {...post}/>
                </li>
            ))
        );
    }
}

export default PostList;