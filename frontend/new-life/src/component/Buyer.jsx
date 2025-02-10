import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Buyer.css";

const Buyer = (props) => {
  const navigate = useNavigate(); // Define the navigate function

  const [contactNumber, setContactNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="column">
          <button className="button" onClick={() => alert("Pressed!")}>
            <span className="text">{"BACK"}</span>
          </button>
          <span className="text2">{"BUYER DETAILS"}</span>
          <div className="column2">
            <span className="text3">{"Contact Number"}</span>
            <input
              placeholder="Enter Contact number"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              className="input"
            />
            
            <span className="text4">{"Enter PAN number (optional)"}</span>
            <input
              placeholder="Enter PAN number"
              value={panNumber}
              onChange={(event) => setPanNumber(event.target.value)}
              className="input"
            />
            
            <span className="text4">{"Enter Organization name (optional)"}</span>
            <input
              placeholder="Enter Organization name"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
              className="input2"
            />
            
            <span className="text3">{"Enter Password"}</span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="input2"
            />
            
            <span className="text3">{"Re-enter Password"}</span>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="input3"
            />
            
            <button className="button2" onClick={() => navigate("/Home")}>
              <span className="text5">{"Sign Up"}</span>
            </button>
          </div>
          
          <span className="text6">{"Already have an account? Click here"}</span>
        </div>
      </div>
    </div>
  );
};

export default Buyer;