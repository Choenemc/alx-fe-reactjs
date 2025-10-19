import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics of routing in React applications...' },
    { id: 2, title: 'Advanced Routing Techniques', excerpt: 'Explore nested routes, protected routes, and more...' },
    { id: 3, title: 'Dynamic Routing in Practice', excerpt: 'See how to handle dynamic parameters in your routes...' },
  ]

  return (
    <div className="card">
      <h1>Blog Posts</h1>
      <p>Click on any post to view its details using dynamic routing.</p>
      
      <div style={{ marginTop: '2rem' }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '1.5rem', 
            marginBottom: '1rem',
            backgroundColor: 'white'
          }}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link 
              to={`/blog/${post.id}`} 
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog