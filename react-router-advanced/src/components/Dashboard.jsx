import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({ user }) => {
  return (
    <div className="card">
      <h1>Dashboard</h1>
      <p>Welcome back, {user?.name}!</p>
      <div style={{ marginTop: '2rem' }}>
        <h3>Quick Links</h3>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Link to="/profile" className="btn btn-primary">
            View Profile
          </Link>
          <Link to="/profile/settings" className="btn btn-success">
            Edit Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard