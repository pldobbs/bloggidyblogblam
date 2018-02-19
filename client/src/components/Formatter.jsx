import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Formatter extends Component {
    render() {
        let blogPosts = this.props.posts.map((post) => {
            return (
                <div className="card col-align-self-center mt-4" key={post.id}>
                    <div className="card-block">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.content.substring(0, 50)}...</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <Link className="list-group-item" to={`/blog/${post.id}`}>Read More</Link>
                    </ul>
                </div>
            );
        });
        return (
            <div className="container">
                {blogPosts}
            </div>
        )
    }
}