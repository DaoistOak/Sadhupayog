import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './LoginPage.css';  // Import styles

const LoginPage = (props) => {
  const navigate = useNavigate(); // Define the navigate function

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleLogin = () => {
    console.log("Login button pressed!");
    navigate("/Home");
  };

  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="column">
          <button className="button" onClick={() => alert("Back button pressed!")}>
            <span className="text">BACK</span>
          </button>
          <span className="text2">LOGIN</span>
          <div className="column2">
            <span className="text3">Enter number</span>
            <input
              placeholder="Enter Seller Phone Number"
              value={input1}
              onChange={(event) => setInput1(event.target.value)}
              className="input"
            />
            <span className="text3">Enter Password</span>
            <input
              type="password"
              placeholder="Enter the same password"
              value={input2}
              onChange={(event) => setInput2(event.target.value)}
              className="input2"
            />
            <button className="button2" onClick={() => navigate("/Home")}>
              <span className="text3">LOGIN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;