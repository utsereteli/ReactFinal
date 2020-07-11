import React  from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authActions'
import { useHistory } from "react-router-dom";
import './login.scss'

export const Login = (props) => {
    const history = useHistory()
    const user = {
        email: '',
        password: '',
    }
    const onSubmit = () => {
        props.loginUser(user)
    }
    const onRegisterClick = () => {
        history.push('/registration')
    }
    return (
        <section className="login">
            <div className="title">Login</div>
            <div className="login__form">
                <div className="errors">
                    {props.auth.error.map(error => <span className="error">{error}</span> )}
                </div>
                <input type="email" className="custom-input" placeholder="Email" onChange={(e) => user.email = e.target.value}/>
                <input type="password" className="custom-input" placeholder="Password" onChange={(e) => user.password = e.target.value}/>
                <div className="custom-button custom-button--red" onClick={onSubmit}>
                    Login
                </div>
            </div>
            <div className="login__suggestion">
                <span className="login__text">
                    Have no account yet?
                </span>
                <div className="custom-button custom-button--green" onClick={onRegisterClick}>
                    Register
                </div>
            </div>
            
        </section>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, { loginUser })(Login)
