import React from 'react';
import "./Second.css";


    const Second = ({buttonText}) => {
    return (
      <button 
      onClick={() => window.open('https://calendly.com/barrettali786')}
      className='second-btn'
      >
      {buttonText}
      </button>
    );
  }


export default Second;
