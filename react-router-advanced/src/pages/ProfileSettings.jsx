import { useState } from 'react'

const ProfileSettings = () => {
  const [theme, setTheme] = useState('light')
  const [notifications, setNotifications] = useState(true)

  const handleSave = (e) => {
    e.preventDefault()
    alert('Settings saved successfully!')
  }

  return (
    <div className="profile-section">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSave} className="settings-form">
        <div className="form-group">
          <label>Theme Preference:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
            <option value="auto">Auto (System)</option>
          </select>
        </div>
        
        <div className="form-group checkbox-group">
          <label>
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            /> 
            Enable email notifications
          </label>
        </div>
        
        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
  )
}

export default ProfileSettings