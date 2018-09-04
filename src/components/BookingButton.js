import React from 'react';
import '../App.css';

const BookingButton = () => {

  const toggleAnimation = () => {
    let bookingButton = document.getElementById('nav-icon3');
    bookingButton.classList.toggle('open')
  }

  return (
    <div id="nav-icon3" onClick={toggleAnimation}>
      <span style={{color: '#ff0000'}}></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BookingButton;
