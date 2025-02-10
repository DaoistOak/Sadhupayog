"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = (props) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    citizenship: "",
    idNumber: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    password: "",
  })
  const [idPhoto, setIdPhoto] = useState(null)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFileChange = (event) => {
    setIdPhoto(event.target.files[0])
  }

  const handleLogin = () => {
    console.log("Registration submitted:", formData)
    console.log("ID Photo:", idPhoto)
    navigate("/Home")
  }

  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="column">
          <button className="button" onClick={() => navigate(-1)}>
            <span className="text">BACK</span>
          </button>
          <span className="text2">SELLER REGISTRATION</span>
          <div className="column2">
            <span className="text3">Username</span>
            <input
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleInputChange}
              className="input"
            />
            <span className="text3">Your Shop Size</span>
            <select name="citizenship" value={formData.citizenship} onChange={handleInputChange} className="input">
              <option value="">Select size</option>
              <option value="citizen">Small Scale</option>
              <option value="permanent-resident">Medium Scale</option>
              <option value="other">Large Scale</option>
            </select>
            <span className="text3">PAN Number</span>
            <input
              name="idNumber"
              placeholder="Enter PAN Number "
              value={formData.idNumber}
              onChange={handleInputChange}
              className="input"
            />
          
            <span className="text3">Phone Number</span>
            <input
              name="phoneNumber"
              placeholder="Enter Seller Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="input"
            />
            <span className="text3">Email </span>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="input"
            />
            <span className="text3">Date of Birth</span>
            <input
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="input"
            />
            <span className="text3">Password</span>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              className="input2"
            />
            <button className="button2" onClick={() => navigate("/Sellerinterface")}>
              <span className="text4">REGISTER</span>
             
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

