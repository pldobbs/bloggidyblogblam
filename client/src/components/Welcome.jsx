import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello, Welcome</h1>
                <Link className="btn btn-primary" to="/blog">To List</Link>
                <Link className="btn btn-primary" to="/write">Create new Entry</Link>
            </div>
        )
    }
}