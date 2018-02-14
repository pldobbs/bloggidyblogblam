import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Hello, Welcome</h1>
                <Link to="/blog">To List</Link>
            </div>
        )
    }
}