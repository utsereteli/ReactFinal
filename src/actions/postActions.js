import {
    FETCH_POSTS,
    NEW_POST,
    DELETE_POST,
    EDIT_POST,
    FETCH_SINGLE_POST
} from './types'
import axios from '../helpers/AxiosInstance'

export const fetchPosts = () => dispatch => {
    axios.get('posts')
        .then(resposne => {
            dispatch({
                type: FETCH_POSTS,
                payload: resposne.data.result
            })
        })
}

export const createPost = (post) => dispatch => {
    axios.post(`posts/`,post).then(response =>  {
        dispatch({ 
            type: NEW_POST,
            payload: response.data.result
        })
    }
    )
}

export const deletePost = (postId) => dispatch => {
    axios.delete(`posts/${postId}`).then(response => {
        dispatch({ 
            type: DELETE_POST,
            payload: response.data.result
        })
    })
}

export const editPost = (post) => dispatch => {
    axios.patch(`posts/${post.postId}`, post).then(response => {
        dispatch({ 
            type:EDIT_POST,
            payload: response.data.result
        })
    })
}

export const fetchPost = (id) => dispatch => {
    axios.get(`/posts/${id}`).then(response => {
        axios.get('/comments/',{
            params:{ 
                post_id: id
            }
        }).then(commentRespnse => {
            const post = {
                ...response.data.result,
                comments: commentRespnse.data.result
            }
            dispatch({
                type: FETCH_SINGLE_POST,
                payload: post
            })
        })
    })
}