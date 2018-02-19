import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import * as postsService from '../services/posts';

export default class SingleBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogPost: {}
        }
    }

    componentDidMount() {
        postsService.one(this.props.match.params.id)
            .then(data => {
                this.setState({ blogPost: data })
            })
    }
    handleDelete() {
        postsService.destroy(this.props.match.params.id)
            .then(console.log)
    }
    render() {
        let blogPost = this.state.blogPost;
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="card col-align-self-center" key={blogPost.id}>
                        <img className="card-img-top w-100" src="" alt="Some Pic" />
                        <div className="card-block">
                            <h2 className="card-title">{blogPost.title}</h2>
                            <p className="card-text">{blogPost.content}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <Link className="list-group-item" to={`/update/${blogPost.id}`}>Update Post</Link>
                            <Link className="list-group-item" to="/blog">Back to List</Link>
                            <Link className="list-group-item" to="/blog" onClick={() => { this.handleDelete() }}>Delete Post</Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}