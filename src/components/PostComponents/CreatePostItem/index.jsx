import React from 'react'
import './CreatePostItem.scss'

function CreatePostItem({onSubmit}) {
    const post = {
        title: '',
        body: ''
    }
    return (
        <div className="post">
            <input placeholder="Title" className="post__title" onChange={(e) => post.title = e.target.value} />
            <textarea rows="5" cols="30" placeholder="Body Text" type="textbox" className="post__body" onChange={(e) => post.body = e.target.value} />
            <div className="custom-button custom-button--red" onClick={ () => onSubmit(post) }> create </div>
        </div>
    )
}

export default CreatePostItem
