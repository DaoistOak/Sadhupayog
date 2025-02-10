"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Buyer.css"

const Buyer = () => {
  const navigate = useNavigate()

  const [contactNumber, setContactNumber] = useState("")
  const [panNumber, setPanNumber] = useState("")
  const [organizationName, setOrganizationName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <div className="buyer-container">
      <div className="buyer-background">
        <div className="buyer-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="buyer-content">
        <div className="buyer-card">
          <button className="back-button" onClick={() => navigate(-1)}>
            <span className="button-icon">←</span>
            <span className="button-text">Back</span>
          </button>

          <div className="buyer-header">
            <h1 className="buyer-title">Buyer Details</h1>
            <p className="buyer-subtitle">Please fill in your information</p>
          </div>

          <form className="buyer-form">
            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                placeholder="Enter Contact number"
                value={contactNumber}
                onChange={(event) => setContactNumber(event.target.value)}
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <label className="form-label">PAN Number (Optional)</label>
              <input
                type="text"
                placeholder="Enter PAN number"
                value={panNumber}
                onChange={(event) => setPanNumber(event.target.value)}
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <label className="form-label">Organization Name (Optional)</label>
              <input
                type="text"
                placeholder="Enter Organization name"
                value={organizationName}
                onChange={(event) => setOrganizationName(event.target.value)}
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="form-input"
              />
              <div className="input-highlight"></div>
            </div>

            <button type="button" className="submit-button" onClick={() => navigate("/Home")}>
              <span className="button-content">
                <span className="button-text">Sign Up</span>
                <span className="button-icon">→</span>
              </span>
            </button>

            <div className="login-link">
              Already have an account?
              <button type="button" className="text-button" onClick={() => navigate("/login")}>
                Login here
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Buyer

