import React, { Component } from 'react'
// import './PostItem.scss'
import { connect } from 'react-redux'
import { fetchPost } from '../../../actions/postActions'


class PostItem extends Component {
    constructor(props) {
        super(props)
        this.postId = this.props.match.params.postId
    }

    componentWillMount() {
        this.props.fetchPost(this.postId)
    }
    
    render() {
        return (
            <div className="post">
                <div className="post__title">{this.props.post.title}</div>
                <div className="post__body">{this.props.post.body}</div>
                <div className="post__comments">
                    {this.props.post.comments.map(comment => 
                        <div className="post_comment">
                            {comment}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.posts.item
})


export default connect(mapStateToProps, { fetchPost })(PostItem)
