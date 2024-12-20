
import React from 'react';

// React Router DOM'dan Link ve Outlet bileşenlerini içe aktarıyoruz
import { Link, Outlet } from 'react-router-dom';


function About() {
  return (
    <div>
        {/* Sayfa başlığı */}
        <h1>About</h1>
        
        {/* Sayfa elemanları arasında boşluk bırakmak için yatay çizgi */}
        <hr style={{marginBottom: 20}}/>

        {/* Navigasyon bağlantıları */}
        <Link className='link' to="employees">About Employees</Link>
        <Link className='link' to="company">About Company</Link>

        {/* Nested routes içeriklerinin gösterileceği alan bunu eklemeseydik child companentlere erisemezdik*/}
        <Outlet />
    </div>
  );
}


export default About;
