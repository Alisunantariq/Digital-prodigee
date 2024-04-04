import React from 'react';
import "./Third.css";


    const Third= ({buttonText}) => {
    return (
      <button 
      onClick={() => window.open('https://calendly.com/barrettali786')}
      className='third-btn'
      >
      {buttonText}
      </button>
    );
  }


export default Third;
