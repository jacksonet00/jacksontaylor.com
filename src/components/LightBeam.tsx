import React from 'react';

const LightBeam = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden">
      <div
        className="absolute -top-20 -left-20 w-[200px] h-[1000px] opacity-10"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
          transform: 'rotate(45deg)',
          boxShadow: '0 0 150px 150px rgba(255,255,255,0.05)',
        }}
      ></div>
    </div>
  );
};

export default LightBeam;