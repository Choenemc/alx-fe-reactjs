import React from 'react'

const ProfileDetails = ({ user }) => {
  return (
    <div>
      <h2>Profile Details</h2>
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
        <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
        <p><strong>User ID:</strong> {user?.id || 'N/A'}</p>
        <p><strong>Member Since:</strong> January 2024</p>
      </div>
    </div>
  )
}

export default ProfileDetails