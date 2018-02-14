import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formatter from './Formatter';

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/api/blogs")
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ posts: data })
            })
    }
    render() {
        return (
            <div className="container">
                <Formatter posts={this.state.posts} />
            </div>
        )
    }
}