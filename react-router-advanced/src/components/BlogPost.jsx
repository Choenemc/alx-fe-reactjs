import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const BlogPost = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  // Mock blog post data
  const blogPosts = {
    1: {
      title: 'Getting Started with React Router',
      content: 'React Router is a powerful routing library for React applications...',
      author: 'John Doe',
      date: '2024-01-15'
    },
    2: {
      title: 'Advanced Routing Techniques',
      content: 'Learn how to implement nested routes, protected routes, and dynamic routing...',
      author: 'Jane Smith',
      date: '2024-01-20'
    },
    3: {
      title: 'Dynamic Routing in Practice',
      content: 'Dynamic routing allows you to handle variable paths in your application...',
      author: 'Mike Johnson',
      date: '2024-01-25'
    }
  }

  const post = blogPosts[postId]

  if (!post) {
    return (
      <div className="card">
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="card">
      <button 
        onClick={() => navigate(-1)}
        className="btn btn-primary"
        style={{ marginBottom: '1rem' }}
      >
        ← Back
      </button>
      
      <h1>{post.title}</h1>
      <div style={{ color: '#666', marginBottom: '1rem' }}>
        <span>By {post.author} • {post.date}</span>
      </div>
      
      <p>{post.content}</p>
      
      <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ddd' }}>
        <p>Post ID: {postId}</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/blog" className="btn btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost