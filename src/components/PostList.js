import React from 'react';
import './PostList.css';
import Post from './Post'

function PostList(props) {
    return (
        <div className="post-list">
            {props.posts.map( post => (
            <li className='postlist_item'>
                <Post {...post}/>
            </li>
        ))}
        </div>
    );
}

export default PostList;