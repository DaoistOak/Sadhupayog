"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"

const Home = () => {
  const navigate = useNavigate()
  const [isRegistering, setIsRegistering] = useState(null)
  const [userType, setUserType] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  const handleLogin = () => {
    if (username && password) {
      setLoginError("")
      navigate("/user")
    } else {
      setLoginError("Please enter both username and password.")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-card">
          <div className="brand">
            <h1 className="brand-title">SADUPAYOG</h1>
            <p className="brand-subtitle">Welcome back! Please login to your account.</p>
          </div>

          {isRegistering === null && (
            <div className="auth-options">
              <button className="auth-button login-btn" onClick={() => setIsRegistering(false)}>
                <span className="button-content">
                  <span className="button-text">Login</span>
                  <span className="button-icon">→</span>
                </span>
              </button>
              <button className="auth-button register-btn" onClick={() => setIsRegistering(true)}>
                <span className="button-content">
                  <span className="button-text">Register</span>
                  <span className="button-icon">+</span>
                </span>
              </button>
            </div>
          )}

          {isRegistering === false && (
            <div className="auth-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="auth-input"
                />
                <div className="input-highlight"></div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                />
                <div className="input-highlight"></div>
              </div>
              {loginError && <div className="error-message">{loginError}</div>}
              <button className="auth-button submit-btn" onClick={handleLogin}>
                <span className="button-content">
                  <span className="button-text">Login Now</span>
                  <span className="button-icon">→</span>
                </span>
              </button>
              <button className="back-button" onClick={() => setIsRegistering(null)}>
                ← Back
              </button>
            </div>
          )}

          {isRegistering && !userType && (
            <div className="register-options">
              <h2 className="register-title">Choose your role</h2>
              <div className="role-buttons">
                
                
                
                
                <button className="role-button seller" onClick={() => navigate("/LoginPage")}>
                  <span className="role-icon">💼</span>
                  <span className="role-text">Seller</span>
                </button>
                <button className="role-button cold-store" onClick={() => navigate("/cold")}>
                  <span className="role-icon">❄️</span>
                  <span className="role-text">Cold Store</span>
                </button>
              </div>
              <button className="back-button" onClick={() => setIsRegistering(null)}>
                ← Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home

