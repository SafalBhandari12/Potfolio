// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className = "", style, ...props }) => {
  return (
    <div
      className={`bg-white shadow rounded-md ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
