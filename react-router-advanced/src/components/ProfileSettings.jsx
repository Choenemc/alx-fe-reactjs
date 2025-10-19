import React, { useState } from 'react'

const ProfileSettings = ({ user }) => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
    language: 'en'
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Settings saved successfully!')
  }

  return (
    <div>
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div className="form-group">
          <label className="form-label">
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              style={{ marginRight: '0.5rem' }}
            />
            Enable Notifications
          </label>
        </div>

        <div className="form-group">
          <label className="form-label">Theme:</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="form-input"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Language:</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="form-input"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Save Settings
        </button>
      </form>
    </div>
  )
}

export default ProfileSettings