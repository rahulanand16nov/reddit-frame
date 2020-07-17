import React from 'react';
import moment from 'moment';
import PostMedia from './PostMedia';
import { FaAngleUp, FaAngleDown, FaCommentAlt, FaShare } from 'react-icons/fa'; 
import './Post.css';

function Post(props) {
    return (
        <div className="post">
            <div className="vote">
                <button className="vote_btn"> <FaAngleUp className="vote_up_btn"/> </button>
                    <div className="vote_score">{formatCount(props.data.ups)}</div>
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
                <a className="post_title" href={props.url}>{props.data.title}</a>
                <PostMedia type={props.data.Media_type} url={props.data.name} />
                <div className="post_footer">
                    <div className="post_comments">
                        <FaCommentAlt className="post_foot_item" />
                        <span className="post_foot_item">{formatCount(props.data.num_comments)} comments</span>
                    </div>
                    <FaShare className="post_foot_item"/>
                    <span className="post_foot_item">Share</span>
                </div>
            </div>
        </div>
    )
}

function formatCount(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
}

export default Post;