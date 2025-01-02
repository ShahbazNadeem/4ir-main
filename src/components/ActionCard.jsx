import React from 'react';
import './widgets.css';

export const ActionCard = ({ children, className }) => {
  return (
    <div className={`action-card ${className}`}>
      <div className='action-card-item'>
        {children}
      </div>
    </div>
  )
};

ActionCard.HeaderMain = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
};
ActionCard.Header = ({ title }) => {
  return (
    <h2>{title}</h2>
  );
};

ActionCard.Body = ({ description }) => {
  return (
    <p>{description}</p>
  );
};

ActionCard.Button = ({ onClick, label }) => {
  return (
    <button className='btn1' onClick={onClick}>
      {label}
    </button>
  );
};
