import React from 'react';
import "./Fourth.css";


    const Fourth = ({buttonText}) => {
    return (
      <button 
      onClick={() => window.open('https://calendly.com/barrettali786')}
      className='fourth-btn'
      >
      {buttonText}
      </button>
    );
  }


export default Fourth;
