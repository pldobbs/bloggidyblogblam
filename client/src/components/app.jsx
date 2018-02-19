import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import NewPost from './NewPost';
import List from './List';
import SingleBlog from './SingleBlog';
import Update from './Update';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';


export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/blog" component={List} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/blog/:id" component={SingleBlog} />
                        <PrivateRoute exact path="/write" component={NewPost} />
                        <PrivateRoute exact path="/update/:id" component={Update} />
                    </Switch>
                </Fragment>
            </Router >
        )
    }
}