import React from "react";
import logo from "../assets/t4e_logo2.png";

const Loader = () => {
  return (
    <>
      <style>
        {`
          .spinner-wrapper {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #0b0a33;
            overflow: hidden;
          }

          /* Main container for the spinner */
          .spinner-container {
            position: relative;
            width: 420px;
            height: 320px;
            transform-style: preserve-3d;
            perspective: 1200px;
          }

          /* Central logo node */
          .node {
            width: 100%;
            height: auto;
            display: block;
            // filter: brightness(1.2) drop-shadow(0 0 14px rgba(255, 255, 255, 0.45));
            animation: nodePulse 1.8s ease-in-out infinite;
            object-fit: contain;
            transform-origin: center;
          }

          .node-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 250px;
            max-width: 78%;
            // box-shadow:
            //   0 0 32px rgba(255, 255, 255, 0.15),
            //   0 0 64px rgba(255, 255, 255, 0.08);
          }

          /* Base style for all weaving threads */
          .thread {
            position: absolute;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.95),
              transparent
            );
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.55);
            transform-origin: center;
          }

          /* Individual thread positioning and animation delays */
          .t1 {
            width: 100%;
            height: 3px;
            top: 30%;
            left: 0;
            animation: weave1 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          }

          .t2 {
            width: 3px;
            height: 100%;
            top: 0;
            left: 70%;
            animation: weave2 2.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
          }

          .t3 {
            width: 100%;
            height: 3px;
            bottom: 30%;
            left: 0;
            animation: weave3 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
          }

          .t4 {
            width: 3px;
            height: 100%;
            top: 0;
            left: 30%;
            animation: weave4 2.6s cubic-bezier(0.36, 0, 0.66, -0.56) infinite;
          }

          /* Animation for the central node's pulsing effect */
          @keyframes nodePulse {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
          }

          /* Animations for each of the four weaving threads */
          @keyframes weave1 {
            0% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(40px) rotateX(60deg) rotateZ(20deg);
              opacity: 1;
            }
            100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weave2 {
            0% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateX(-40px) rotateY(60deg) rotateZ(-20deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weave3 {
            0% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateY(-40px) rotateX(-60deg) rotateZ(15deg);
              opacity: 1;
            }
            100% {
              transform: translateY(0) rotateX(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }

          @keyframes weave4 {
            0% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
            50% {
              transform: translateX(40px) rotateY(-60deg) rotateZ(-15deg);
              opacity: 1;
            }
            100% {
              transform: translateX(0) rotateY(0deg) rotateZ(0deg);
              opacity: 0.8;
            }
          }
        `}
      </style>
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
    </>
  );
};

export default Loader;
