import React from 'react';
import './PostMedia.css';


function PostMedia(props) {
    if(props.type === "Img") {
        return (
            <div className="post_image_container">
                <img alt="Post"className="post_image" src={`${process.env.PUBLIC_URL}/images/${props.url}.jpg`}></img>
            </div>
        );
    }
    return null;
}

export default PostMedia;