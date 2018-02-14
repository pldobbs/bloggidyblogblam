import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Formatter extends Component {
    render() {
        let blogPosts = this.props.posts.map((post) => {
            return (
                <div className="card col-align-self-center" style={{ width: '20rem' }} key={post.id}>
                    <img className="card-img-top w-100" src="" alt="Some Pic" />
                    <div className="card-block">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.content.substring(0, 100)}...</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <Link className="list-group-item" to={`/blog/${post.id}`}>Read More</Link>
                    </ul>
                </div>
            );
        });
        return (
            <div className="row p-1">
                {blogPosts}
            </div>
        )
    }
}