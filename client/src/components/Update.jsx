import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import * as postsService from '../services/posts';

export default class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        postsService.one(this.props.match.params.id)
            .then(data => {
                this.setState({ post: data })
            })
    }
    updateTitle(value) {
        this.setState({
            post: {
                title: value,
                content: this.state.post.content,
                id: this.state.post.id
            }
        })
    }
    updateContent(value) {
        this.setState({
            post: {
                content: value,
                title: this.state.post.title,
                id: this.state.post.id
            }
        })
    }
    updatePost() {
        postsService.update(this.props.match.params.id, {
            title: this.state.post.title,
            content: this.state.post.content
        })
            .then(console.log)
        this.props.history.replace(`/blog/${this.state.post.id}`);
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="blogform">
                    <div className="form-group p-5">
                        <label htmlFor="exampleFormControlTextarea1" className="lead">
                            Title...
          </label>
                        <textarea onChange={(event) => { this.updateTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                            value={this.state.post.title}
                        />
                        <label htmlFor="exampleFormControlTextarea2" className="lead">
                            Content...
          </label>
                        <textarea
                            onChange={(event) => { this.updateContent(event.target.value) }}
                            className="form-control p-4 m-2"
                            id="exampleFormControlTextarea2"
                            rows="11"
                            value={this.state.post.content}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { this.updatePost() }}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}