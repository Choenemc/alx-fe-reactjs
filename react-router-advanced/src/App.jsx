import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Blog from './pages/Blog'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            
            {/* Dynamic Routing for Blog Posts */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Blog />} />
            
            {/* Protected Routes with Nested Routes */}
            <Route 
              path="/profile/*" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            
            {/* Catch all route - 404 */}
            <Route path="*" element={
              <div className="page">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  )
}

export default App
