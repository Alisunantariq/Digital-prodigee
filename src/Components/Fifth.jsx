import React from 'react';
import "./Fifth.css";


    const Fifth = ({buttonText}) => {
    return (
      <button 
      onClick={() => window.open('https://calendly.com/barrettali786')}
      className='fifth-btn'
      >
      {buttonText}
      </button>
    );
  }


export default Fifth;
