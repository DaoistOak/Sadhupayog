import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Cold.css";

const Cold = (props) => {
  const navigate = useNavigate(); // Define the navigate function

  const [input1, onChangeInput1] = useState('');
  const [input2, onChangeInput2] = useState('');
  const [input3, onChangeInput3] = useState('');
  const [input4, onChangeInput4] = useState('');
  const [input5, onChangeInput5] = useState('');

  return (
    <div className="contain">
      <div className="scroll-view">
        <div className="column">
          <button className="button" onClick={() => alert("Pressed!")}>
            <span className="text">{"BACK"}</span>
          </button>
          <span className="text2">{"COLD STORES DETAILS"}</span>
          <div className="column2">
            <span className="text3">{"Contact Number"}</span>
            <input
              placeholder={"Enter your Contact Number"}
              value={input1}
              onChange={(event) => onChangeInput1(event.target.value)}
              className="input"
            />
            <span className="text3">{"Email"}</span>
            <input
              placeholder={"Enter your email address"}
              value={input2}
              onChange={(event) => onChangeInput2(event.target.value)}
              className="input2"
            />
            <span className="text3">{"Enter PAN number"}</span>
            <input
              placeholder={"Enter PAN number"}
              value={input3}
              onChange={(event) => onChangeInput3(event.target.value)}
              className="input2"
            />
            <span className="text3">{"Organization Name"}</span>
            <input
              placeholder={"Enter the organization name"}
              value={input4}
              onChange={(event) => onChangeInput4(event.target.value)}
              className="input2"
            />
            <span className="text3">{"Enter established date"}</span>
            <input
              placeholder={"____/__/__"}
              value={input5}
              onChange={(event) => onChangeInput5(event.target.value)}
              className="input3"
            />
            <button className="button2" onClick={() => navigate("/User")}>
              <span className="text4">{"Sign Up"}</span>
            </button>
          </div>
          <span className="text5">{"Already have an account? Click here"}</span>
        </div>
      </div>
    </div>
  );
};

export default Cold;