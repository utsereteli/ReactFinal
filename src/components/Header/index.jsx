import React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/authActions'
import './header.scss'

export const Header = (props) => {
    const logOutHandler = () => {
        props.logoutUser(props.auth.authenticatedUser.email)
    }
    return (
        <header  className="header">
            <div className="header__logo">
            <Link to="/posts" >Photos.io</Link>
            </div>
            <div className="header__navbar">
                <span className="header__item">
                    <Link to="/posts" >Posts</Link>
                </span>
                <span className="header__item">
                    <Link to="/albums" >Albums</Link>
                </span>
                <span className="header__item">
                     <Link to="/photos" >Photos</Link>
                </span>
                { props.auth.authenticated 
                    ? <span className="header__item">
                        <Link to="/users" >Users</Link>
                    </span> 
                    : null 
                }
            </div>
            <div className="header__auth">
                { props.auth.authenticated
                 ? <div className="header__user" onClick={logOutHandler}>{ props.auth.authenticatedUser.first_name },Logout</div>  
                 :  <Link to="/login" > <div className="header__login">
                     Login</div> </Link>
                }
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps,{logoutUser})(Header)
