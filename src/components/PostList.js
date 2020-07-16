import React from 'react';
import './PostList.css';
import Post from './Post'

function PostList(props) {
    return (
        props.posts.map( post => (
            <li className='postlist_item'>
                <Post {...post}/>
            </li>
        ))
    );
}

export default PostList;