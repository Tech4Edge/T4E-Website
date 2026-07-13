import React from "react";
import logo from "../assets/t4e_logo2.png";

const Loader = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-container">
        <div className="thread t1" />
        <div className="thread t2" />
        <div className="thread t3" />
        <div className="thread t4" />
        <div className="node-wrap">
          <img src={logo} alt="Tech4Edges Logo" className="node" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
