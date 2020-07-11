import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, ERROR_STATUS } from './types'
import axios from '../helpers/AxiosInstance'

export const checkAuth = () => dispatch => {
    const loggedUser = localStorage.getItem('loggedUser')
    if(loggedUser) {
        dispatch({ 
            type: LOGIN_USER,
            payload: JSON.parse(loggedUser),
            error: []
        })
    }
}


export const loginUser = (user) => dispatch => {
    if(!user.email || !user.password ) return
    const error = []
    const users = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : []
    const authenticatedUser = users.filter(userEl => userEl.email === user.email && userEl.password === user.password)[0]
    if(!authenticatedUser) error.push('Login failed')
    axios.get('/users', {
        params: {
            email: user.email
        }
    }).then(response => {
        if(response.data._meta.success) {
            localStorage.setItem('loggedUser' , JSON.stringify(response.data.result[0]))
            console.log(JSON.stringify(response.data.result[0]))
            dispatch({ 
                type: LOGIN_USER,
                payload: response.data.result[0],
                error: []
            })
        }
    })
   
}

export const registerUser = (user) => dispatch => {
    const users = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : []
    const existing = users.filter(userEl => userEl.email === user.email)[0]
    if(existing) {
        dispatch({
            type:ERROR_STATUS,
            payload: '',
            error: ['User already exists']
        })
    } else {
        axios.post('/users',user).then(response => {
            // i don't why, but when i'm making request it returns me status 401 (unauthorized) but adds user.
            if(response.data._meta.code === 401 ) {
                axios.get('/users', {
                    params: {
                        email: user.email
                    }
                }).then(response => {
                    if(response.data._meta.success) {
                        users.push(user)
                        localStorage.setItem('users' , JSON.stringify(users))
                        localStorage.setItem('loggedUser' , JSON.stringify(response.data.result[0]))
                        dispatch({ 
                            type: REGISTER_USER,
                            payload: response.data.result[0],
                            error: []
                        })
                    }
                })
            }
        })
    }
    
}

export const logoutUser = (user) => dispatch => {
    localStorage.removeItem('loggedUser')
    dispatch({ type: LOGOUT_USER})
}