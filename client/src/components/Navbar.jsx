import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <img className="rounded mx-auto" src="" alt="" style={{ height: "50px", width: "50px" }} />
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/blog">Blog Posts<span className="sr-only">(current)</span></Link>
                        <a className="nav-item nav-link" href="/write">New Post</a>
                        <a className="nav-item nav-link" href="">Sign Up</a>
                    </div>
                </div>
            </nav>
        )
    }
}

