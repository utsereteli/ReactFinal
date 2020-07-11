import React  from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authActions'
import { useHistory } from "react-router-dom";
import './registration.scss'

export const Registration = (props) => {
    const history = useHistory()
    const user = {
        email: '',
        password: '',
        first_name : '',
        last_name: '',
        gender: 'male'
    }
    const onSubmit = () => {
        props.registerUser(user) 
        if(props.auth.authenticated) {
            history.push('/posts')
        }
    }
    const onLoginClick = () => {
        history.push('/login')
        
    }
    return (
        <section className="registration">
            <div className="title">registration</div>
            <div className="registration__form">
                <div className="errors">
                    {props.auth.error.map(error => <span className="error">{error}</span> )}
                </div>
                <input type="email" className="custom-input" placeholder="Email" onChange={(e) => user.email = e.target.value}/>
                <input type="password" className="custom-input" placeholder="Password" onChange={(e) => user.password = e.target.value}/>
                <input type="text" className="custom-input" placeholder="First Name" onChange={(e) => user.first_name = e.target.value}/>
                <input type="text" className="custom-input" placeholder="Last Name" onChange={(e) => user.last_name = e.target.value}/>
                <div className="custom-button custom-button--red" onClick={onSubmit}>
                    sign up
                </div>
            </div>
            <div className="registration__suggestion">
                <span className="registration__text">
                    Have account?
                </span>
                <div className="custom-button custom-button--green" onClick={onLoginClick}>
                    login
                </div>
            </div>
            
        </section>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {registerUser})(Registration)
