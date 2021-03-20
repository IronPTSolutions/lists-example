import React from 'react';

const Button = ({ onClick, children, active }) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-primary ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;