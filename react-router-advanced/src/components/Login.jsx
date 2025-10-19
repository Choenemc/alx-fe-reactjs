import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = ({ onLogin, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({
            name: 'john doe',
            email: formData.email
        });
    };

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="card" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Login
                </button>
            </form>
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <p>Demo credentials: any email/password will work</p>
            </div>
        </div>
    );
};

export default Login;