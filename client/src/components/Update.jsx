import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ post: data })
            })
    }
    updateTitle(value) {
        this.setState({
            post: {
                title: value,
                content: this.state.post.content
            }
        })
    }
    updateContent(value) {
        this.setState({
            post: {
                content: value,
                value: this.state.post.content
            }
        })
    }
    updatePost() {
        fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`, {
            method: "PUT"
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
    }
    render() {
        return (
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
                    <Link to="/Main" className="btn btn-outline-success my-2 my-sm-0">Post</Link>
                </div>
            </div>
        )
    }
}