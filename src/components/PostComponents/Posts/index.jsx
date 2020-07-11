import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, createPost } from '../../../actions/postActions'
import PostItem from '../PostItem'
import CreatePostItem from '../CreatePostItem'
import './Posts.scss'

class Posts extends Component {

    componentWillMount() {
        console.log(this.props)
        this.props.fetchPosts()
    }

    onCreate(post) {
        this.props.createPost({
            ...post,
            userId:this.props.auth.authenticatedUser.id
        })
    }

    render() {
        return (
            <section className="post-main">
                <div className="title">Posts</div>
                <div className="post-main__posts">
                    {this.props.auth.authenticated ? <CreatePostItem onSubmit={this.onCreate.bind(this)} /> : null}
                    {this.props.posts.map(post => <PostItem post={post} key={post.id} />)}
                </div>
            
            </section>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    auth: state.auth
})


export default connect(mapStateToProps, { fetchPosts,createPost})(Posts)
