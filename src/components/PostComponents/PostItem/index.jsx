import React from 'react'
import './PostItem.scss'
import { useHistory } from "react-router-dom";


function PostItem({ post }) {
    const history = useHistory()
    return (
        <div className="post">
            <div className="post__title">{post.title}</div>
            <div className="post__body">{post.body}</div>
            <div className="custom-button custom-button--red" onClick={() => history.push(`/posts/${post.id}`)}>show more</div>
        </div>
    )
}

export default PostItem
