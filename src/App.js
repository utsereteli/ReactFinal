import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import {checkAuth} from './actions/authActions'
import './App.scss'
//components
import Header from './components/Header'
import Posts from './components/PostComponents/Posts'
import Registration from './components/AuthComponents/Registration'
import Login from './components/AuthComponents/Login'
import SinglePost from './components/PostComponents/SinglePost'

class App extends Component {

  componentWillMount() {
    const loggedUser = localStorage.getItem('loggedUser')
    if(loggedUser) {
      store.dispatch(checkAuth({username: loggedUser.username, password: loggedUser.password}))
    }
  }
  render () {
    return (
    <Provider store={store} >
      <Router>
        <Header />
        <div className="center-section">
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:postId" component={SinglePost} />
            <Route exact path="/albums" component={Posts} />
            <Route exact path="/photos" component={Posts} />
            <Route exact path="/users" component={Posts} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
    )
  }
}

export default App;

