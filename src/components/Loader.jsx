import React from "react";

const Loader = () => {
  return (
    <div className="loader-screen">
      <div className="loader">
        <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
          <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
            <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="b">
              <stop className="s-xJBuHA073rTt" stopColor="#1570d1" />
              <stop className="s-xJBuHA073rTt" stopColor="#1E90FF" offset={1} />
            </linearGradient>
            <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={0} x2={0} y1={64} x1={0} id="c">
              <stop className="s-xJBuHA073rTt" stopColor="#0F172B" />
              <stop className="s-xJBuHA073rTt" stopColor="#1E90FF" offset={1} />
            </linearGradient>
            <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="d">
              <stop className="s-xJBuHA073rTt" stopColor="#1E90FF" />
              <stop className="s-xJBuHA073rTt" stopColor="#1570d1" offset={1} />
            </linearGradient>
          </defs>
        </svg>
        {/* Letter T */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#b)" d="M 12 12 H 52 M 32 12 V 52" className="dash" pathLength={360} />
        </svg>
        <div className="w-2" />
        {/* Number 4 */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 44 52 V 12 L 12 40 H 52" className="dash" pathLength={360} />
        </svg>
        <div className="w-2" />
        {/* Letter E */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#d)" d="M 52 12 H 16 V 52 H 52 M 16 32 H 44" className="dash" pathLength={360} />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
