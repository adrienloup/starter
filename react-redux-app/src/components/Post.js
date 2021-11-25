import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  render() {

    const post = this.props.post ? (
      <div className="inside">
        <h1>{this.props.post.title}</h1>
        <img src={"https://picsum.photos/458/354/?image=" + this.props.post.img}  alt={this.props.post.id}/>
        <p>{this.props.post.body}</p>
        <div>
          <button onClick={this.handleClick}>Delete</button>
        </div>
      </div>
    ) : (
      <div>Loading post...</div>
    )

    return (
      <div className="body">{post}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
