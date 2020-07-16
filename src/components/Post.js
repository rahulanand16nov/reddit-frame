import React from 'react';
import moment from 'moment';
import { FaAngleUp, FaAngleDown, FaCommentAlt, FaShare } from 'react-icons/fa'; 
import './Post.css';

function Post(props) {
    return (
        <div className="post">
            <div className="vote">
                <button className="vote_btn"> <FaAngleUp className="vote_up_btn"/> </button>
                <div className="vote_score">{props.data.ups}</div>
                <button className="vote_btn vote_down_btn"> <FaAngleDown/> </button>
            </div>
            <div className="post_content">
                <div className="post_header">
                    <span className="post_subreddit">r/{props.data.subreddit}</span>
                    <div className="post_detail">
                        <span>• Posted by </span>
                        <a href={`https://www.reddit.com/user/${props.data.author}`}>
                            u/{props.data.author} 
                        </a>
                        <span> {moment(moment.unix(props.data.created_utc).toDate()).fromNow()}</span>
                    </div>
                </div>
                <div className="post_link">
                    <a className="post_title" href={props.url}>{props.data.title}</a>
                    <div className="post_url">{props.url}</div>
                </div>
                <div className="post_footer">
                    <FaCommentAlt className="post_foot_item" />
                    <span className="post_foot_item">{props.data.num_comments} comments</span>
                    <FaShare className="post_foot_item"/>
                    <span className="post_foot_item">Share</span>
                </div>
            </div>
        </div>
    )
}

export default Post;