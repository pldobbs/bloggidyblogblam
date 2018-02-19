import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import NewPost from './NewPost';
import List from './List';
import SingleBlog from './SingleBlog';
import Update from './Update';


export default class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/blog" component={List} />
                        <Route exact path="/write" component={NewPost} />
                        <Route exact path="/blog/:id" component={SingleBlog} />
                        <Route exact path="/update/:id" component={Update} />
                    </Switch>
                </Fragment>
            </Router >
        )
    }
}