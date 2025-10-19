import React from 'react'
import { Routes, Route, Link, useLocation, Outlet } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

const Profile = ({ user }) => {
  const location = useLocation()

  return (
    <div className="card">
      <h1>User Profile</h1>
      
      {/* Nested Navigation */}
      <nav className="nav-tabs">
        <Link 
          to="/profile" 
          className={`nav-tab ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          Profile Details
        </Link>
        <Link 
          to="/profile/settings" 
          className={`nav-tab ${location.pathname === '/profile/settings' ? 'active' : ''}`}
        >
          Settings
        </Link>
      </nav>

      {/* Nested Routes Outlet */}
      <div style={{ padding: '1rem 0' }}>
        <Routes>
          <Route path="/" element={<ProfileDetails user={user} />} />
          <Route path="/settings" element={<ProfileSettings user={user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Profile