import React from 'react';
import './Header.css';


//Başlık kısmını oluşturan bileşen
function Header() {
  return (
    <div className='header'>
      <div className='header-title'>
        All Courses (<span style={{ color: 'red' }}>85 is the biggest</span>)
      </div>
    </div>
  );
}

export default Header;
