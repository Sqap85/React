import React from "react";

// React Router DOM'dan `Link` bileşenini içe aktarıyoruz.
// `Link`, yönlendirme işlemleri için kullanılır ve sayfa yenilemeden URL'yi değiştirir.
import { Link } from "react-router-dom";

// Header bileşenini tanımlıyoruz.
// Bu bileşen, uygulamanın üst kısmında yer alacak ve navigasyon bağlantıları içerecek.
function Header() {
  return (
    // Header bileşeninin kapsayıcı div'i.
    <div className="header">
      
      {/* Home sayfasına yönlendirme bağlantısı */}
      <Link className="link" to="/">Home</Link>
      
      {/* About sayfasına yönlendirme bağlantısı */}
      <Link className="link" to="/about">About</Link>
      
      {/* Products sayfasına yönlendirme bağlantısı */}
      <Link className="link" to="/products">Products</Link>
      
      {/* Contact sayfasına yönlendirme bağlantısı */}
      <Link className="link" to="/contact">Contact</Link>
      
    </div>
  );
}

export default Header;
