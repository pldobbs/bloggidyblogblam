import React, { Component } from 'react';
import Navbar from './Navbar';
import * as postsService from '../services/posts';

export default class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title: '',
                content: ''
            }
        }
    }
    handleTitle(value) {
        this.setState({
            post: {
                title: value,
                content: this.state.post.content
            }
        })
    }
    handleContent(value) {
        this.setState({
            post: {
                title: this.state.post.title,
                content: value
            }
        })
    }
    submitPost() {
        postsService.insert({
            title: this.state.post.title,
            content: this.state.post.content
        })
        this.props.history.replace("/blog");
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
                        <textarea onChange={(event) => { this.handleTitle(event.target.value) }}
                            className="form-control p-1 m-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                            placeholder="Title"
                        />
                        <label htmlFor="exampleFormControlTextarea2" className="lead">
                            Content...
          </label>
                        <textarea
                            onChange={(event) => { this.handleContent(event.target.value) }}
                            className="form-control p-4 m-2"
                            id="exampleFormControlTextarea2"
                            rows="11"
                            placeholder="Content"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => { this.submitPost() }}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}