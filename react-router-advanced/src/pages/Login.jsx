import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/profile'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim() && password.trim()) {
      login({ username })
      navigate(from, { replace: true })
    }
  }

  return (
    <div className="page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter any username"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter any password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="demo-credentials">
        <p>💡 <strong>Demo Tip:</strong> Enter any username and password to login</p>
      </div>
    </div>
  )
}

export default Login