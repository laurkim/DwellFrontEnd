import React from 'react';
import '../App.css';

const HamburgerMenu = () => {
  return (
    <div id="hamburger-menu">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a href="/home"><li>Home</li></a>
        <a href="/bookings"><li>Bookings</li></a>
        <a href="/" onClick={this.logoutUser}><li>Log Out</li></a>
      </ul>
    </div>
  )
}

export default HamburgerMenu;
