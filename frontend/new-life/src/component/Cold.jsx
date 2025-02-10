"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Cold.css"

const Cold = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    reenterPassword: "",
    contactNumber: "",
    email: "",
    panNumber: "",
    organizationName: "",
    establishedDate: "",
    description: ""
  })

  const [errors, setErrors] = useState({})
  const [showAlert, setShowAlert] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    const fields = {
      username: "Username",
      password: "Password",
      reenterPassword: "Re-enter Password",
      contactNumber: "Contact Number",
      email: "Email",
      panNumber: "PAN Number",
      organizationName: "Organization Name",
      establishedDate: "Established Date",
      description: "Description"
    }

    // Check each field for emptiness
    Object.keys(fields).forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${fields[field]} is required`
      }
    })

    // Additional email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Contact number validation (assuming 10 digits)
    if (formData.contactNumber && !/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid 10-digit contact number"
    }

    // Password match validation
    if (formData.password !== formData.reenterPassword) {
      newErrors.reenterPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setShowAlert(true)
      setTimeout(() => {
        navigate("/Coldstoreinterface")
      }, 5000)
    }
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }))
    }
  }

  return (
    <div className="cold-container">
      <div className="cold-background">
        <div className="cold-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="cold-content">
        <div className="cold-card">
          <button className="back-button" onClick={() => navigate(-1)}>
            <span className="button-icon">←</span>
            <span className="button-text">Back</span>
          </button>

          <div className="cold-header">
            <h1 className="cold-title">Cold Store Registration</h1>
            <p className="cold-subtitle">Please provide your cold store information</p>
          </div>

          <form className="cold-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">
                Username <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                className={`form-input ${errors.username ? "error" : ""}`}
              />
              {errors.username && <span className="error-text">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className={`form-input ${errors.password ? "error" : ""}`}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Re-enter Password <span className="required">*</span>
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={formData.reenterPassword}
                onChange={(e) => handleChange("reenterPassword", e.target.value)}
                className={`form-input ${errors.reenterPassword ? "error" : ""}`}
              />
              {errors.reenterPassword && <span className="error-text">{errors.reenterPassword}</span>}
            </div>

            {/* Existing form fields */}
            <div className="form-group">
              <label className="form-label">
                Contact Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your Contact Number"
                value={formData.contactNumber}
                onChange={(e) => handleChange("contactNumber", e.target.value)}
                className={`form-input ${errors.contactNumber ? "error" : ""}`}
              />
              {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`form-input ${errors.email ? "error" : ""}`}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                PAN Number <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter PAN number"
                value={formData.panNumber}
                onChange={(e) => handleChange("panNumber", e.target.value)}
                className={`form-input ${errors.panNumber ? "error" : ""}`}
              />
              {errors.panNumber && <span className="error-text">{errors.panNumber}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Organization Name <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the organization name"
                value={formData.organizationName}
                onChange={(e) => handleChange("organizationName", e.target.value)}
                className={`form-input ${errors.organizationName ? "error" : ""}`}
              />
              {errors.organizationName && <span className="error-text">{errors.organizationName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Established Date <span className="required">*</span>
              </label>
              <input
                type="date"
                value={formData.establishedDate}
                onChange={(e) => handleChange("establishedDate", e.target.value)}
                className={`form-input ${errors.establishedDate ? "error" : ""}`}
              />
              {errors.establishedDate && <span className="error-text">{errors.establishedDate}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Description <span className="required">*</span>
              </label>
              <textarea
                placeholder="Describe your cold store facilities and services..."
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className={`form-textarea ${errors.description ? "error" : ""}`}
                rows="4"
              />
              {errors.description && <span className="error-text">{errors.description}</span>}
            </div>

            <button type="button" className="submit-button" onClick={handleSubmit}>
              <span className="button-content">
                <span className="button-text">Submit</span>
                <span className="button-icon">→</span>
              </span>
            </button>

            <div className="login-link">
              Already have an account?
              <button type="button" className="text-button" onClick={() => navigate("/login")}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-card">
            <div className="alert-icon">✓</div>
            <h2 className="alert-title">Registration Successful!</h2>
            <p className="alert-message">
              Thank you for registering your cold store. You will be redirected to the cold store interface in 5 seconds.
            </p>
            <div className="alert-progress">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cold
