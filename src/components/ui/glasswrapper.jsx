import React from "react";


const GlassWrapper = ({ children }) => {
  return (
    <div className="glass-wrapper">
      <div className="glass-filter"></div>
      <div className="glass-overlay"></div>
      <div className="glass-specular"></div>
      <div className="glass-content">{children}</div>
    </div>
  );
};

export default GlassWrapper;
