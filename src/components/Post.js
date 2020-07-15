import React from 'react';
import moment from 'moment';
import './Post.css';

function Post(props) {
    return (
        <div className="post">
            <div className="vote">
                <button className="vote_button vote_up_button" />
                <div className="vote_score">{props.score}</div>
                <button className="vote_button vote_down_button" />
            </div>
            <div className="post_content">
                <div className="post_link">
                    <a className="post_title" href={props.url}>{props.title}</a>
                    <div className="post_url">{props.url}</div>
                </div>
                <div className="post_detail">
                    <span>by</span>
                    <a className="post_author" href={`https://www.reddit.com/user/${props.author}`}>
                        u/{props.author}
                    </a>
                    <span className="post_timestamp">{moment(props.timestamp).fromNow()}</span>
                    <a className="post_comments" href="/">{props.comments} comments</a>
                </div>
            </div>
        </div>
    )
}

export default Post;