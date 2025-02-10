import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = (props) => {
  const navigate = useNavigate();  // useNavigate hook for navigation

  const [isRegistering, setIsRegistering] = useState(null);  // null means undecided, true means Registering, false means Login
  const [userType, setUserType] = useState(null);  // Tracks the user's type (Buyer, Seller, Cold Store)
  
  // State for login form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Function to handle Register button
  const handleRegister = (type) => {
    setIsRegistering(true);
    setUserType(type);
  };

  // Function to handle Login button
  const handleLogin = () => {
    if (username && password) {
      // Perform login validation (for now just check if both fields are filled)
      setLoginError(""); // Reset any previous error
      navigate("/user");  // Redirect to User page upon successful login (replace with actual login logic)
    } else {
      setLoginError("Please enter both username and password.");
    }
  };

  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="column">
          {isRegistering === null && (
            <>
              <span className="text">{"Sadupagyog"}</span>
              <div className="row-view">
                <button className="button" onClick={() => setIsRegistering(false)}>
                  <span className="text2">{"LOGIN"}</span>
                </button>
              </div>
              <div className="row-view2">
                <button className="button" onClick={() => setIsRegistering(true)}>
                  <span className="text3">{"REGISTER"}</span>
                </button>
              </div>
            </>
          )}

          {/* If the user is on the Login screen */}
          {isRegistering === false && (
            <div className="row-view">
              <span className="text">{"Please log in"}</span>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                />
                {loginError && <span className="error-text">{loginError}</span>} {/* Show error message */}
                <button className="button" onClick={handleLogin}>
                  <span className="text2">{"LOG IN"}</span>
                </button>
              </div>
            </div>
          )}

          {/* If the user is on the Register screen */}
          {isRegistering && !userType && (
            <>
              <span className="text">{"WHO ARE YOU?"}</span>
              <span className="text">{"Choose your user type"}</span>
              <div className="row-view">
                <button className="button" onClick={() => navigate("/buyer")}>
                  Register as Buyer
                </button>
              </div>
              <div className="row-view2">
                <button className="button" onClick={() => navigate("/LoginPage")}>
                  Register as Seller
                </button>
              </div>
              <div className="row-view3">
                <button className="button2" onClick={() => navigate("/cold")}>
                  Register as Cold Store
                </button>
              </div>
            </>
          )}

          {/* If registration has been chosen */}
          {isRegistering && userType && (
            <div className="row-view3">
              <span className="text">{"You have selected " + userType}</span>
              <button className="button" onClick={() => alert("Registration Complete!")}>
                <span className="text3">{"CONFIRM REGISTRATION"}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
