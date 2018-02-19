import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formatter from './Formatter';
import Navbar from './Navbar';
import * as postsService from '../services/posts';

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postsService.all()
            .then(data => {
                this.setState({ posts: data })
            })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Formatter posts={this.state.posts} />
                </div>
            </div>
        )
    }
}