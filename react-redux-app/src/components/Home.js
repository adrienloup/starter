import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Link className="post" key={post.id} to={'/' + post.id}>
            <img src={"https://picsum.photos/458/354/?image=" + post.img} alt={post.id}/>
            <span>{post.title}</span>
          </Link>
        )
      })
    ) : (
      <div>No posts to show</div>
    )

    return (
      <div className="body">
        <h1>My App</h1>
        <div className="posts">{postList}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
