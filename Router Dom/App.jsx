// React'ten useState hook'unu içe aktarıyoruz.
import { useState } from "react";

// Uygulamaya özel CSS dosyasını içe aktarıyoruz.
import "./App.css";

// React Router'dan Routes ve Route bileşenlerini içe aktarıyoruz.
// Routes, URL'ye göre doğru bileşeni render etmeye yarar.
// Route, her bir URL yoluna karşılık gelen bileşeni belirtir.
import { Routes, Route } from "react-router-dom";

// Farklı sayfalar için bileşenler içe aktarılıyor.
import Home from "./components/Home/Home"; // Ana sayfa bileşeni
import About from "./components/About/About"; // Hakkında sayfası bileşeni
import Products from "./components/Product/Products"; // Ürünler sayfası bileşeni
import Contact from "./components/Contact/Contact"; // İletişim sayfası bileşeni
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"; // 404 (Sayfa Bulunamadı) bileşeni

// Header bileşeni ve ona ait CSS dosyası içe aktarılıyor.
import Header from "./components/Header/Header"; 
import "./components/Header/Header.css"; 

// Hakkında sayfasının alt bileşenleri:
import AboutEmployee from "./components/About/AboutEmployee"; // Çalışanlar hakkında bileşen
import AboutCompany from "./components/About/AboutCompany"; // Şirket hakkında bileşen

// Ürün detaylarını göstermek için kullanılan bileşen.
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (
    <div>
      {/* Sayfanın üst kısmında gösterilen Header bileşeni */}
      <Header />

      {/* Sayfa yönlendirmelerini yönetmek için Routes kullanılıyor */}
      <Routes>
        {/* Ana sayfa için route. URL '/' olduğunda Home bileşeni render edilir. */}
        <Route path="/" element={<Home />} />

        {/* Hakkında sayfası için route. */}
        <Route path="/about" element={<About />}>
          {/* Hakkında sayfasının alt yolları */}
          
          {/* Çalışanlar hakkında sayfa. URL '/about/employees' olduğunda render edilir. (childda yola '/' koymayiz)*/}
          <Route path="employees" element={<AboutEmployee />} /> 

          {/* Şirket hakkında sayfa. URL '/about/company' olduğunda render edilir. (childda yola '/' koymayiz)*/}
          <Route path="company" element={<AboutCompany />} />
        </Route>

        {/* Ürünler sayfası için route. URL '/products' olduğunda render edilir. */}
        <Route path="/products" element={<Products />} />

        {/* Ürün detayları sayfası için route. 
            '/product-details/:id' formatındaki dinamik yolları işler. */}
        <Route path="/product-details/:id" element={<ProductDetails />} />
        
        {/* İletişim sayfası için route. URL '/contact' olduğunda render edilir. */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Tanımlanmamış bir URL girildiğinde 404 sayfası gösterilir. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
