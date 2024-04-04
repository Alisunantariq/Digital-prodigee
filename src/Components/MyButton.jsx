import React from 'react';
import "./MyButton.css";

const MyButton = ({buttonText}) => {
  return (
    <button 
      onClick={() => window.open('https://calendly.com/barrettali786')}
    className='all-around'
    >
      {buttonText}
    </button>
  );
};

export default MyButton;
