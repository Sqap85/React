import React from "react";
// useNavigate hook'u, React Router'dan gelir ve programatik olarak gezinme işlemlerini sağlar.
import { useNavigate } from "react-router-dom";

// Product bileşeni, bir ürünün detaylarını ve bir detaya gitme butonunu içerir.
function Product({ product }) {
  // product prop'u, bileşene üst bileşenden gelen bir ürün nesnesidir.
  const { id, name, price } = product; // Ürün nesnesinin id, name ve price özelliklerini ayıklıyoruz.

  // useNavigate, sayfa yönlendirmeleri yapmak için kullanılır.
  const navigate = useNavigate();

  return (
    <div>
      {/* Ürün detayları başlığını içeren bir alan */}
      <div style={{ backgroundColor: "lightgray", width: 110, padding: 10 }}>
        Product Details
      </div>
      
      {/* Ürün bilgileri */}
      <div style={{ marginLeft: 10 }}>
        {/* Ürün adı */}
        <h3>Name: {name}</h3>
        {/* Ürün fiyatı */}
        <h3>Price: {price}</h3>
        {/* Detay sayfasına yönlendirme butonu */}
        <button
          onClick={() => {
            // Butona tıklanıldığında, ilgili ürünün detay sayfasına yönlendirme yapılır.
            navigate("/product-details/" + id);
          }}
        >
          Go Detail
        </button>
      </div>

      {/* Ürünler arasında ayrım yapmak için bir yatay çizgi */}
      <hr />
    </div>
  );
}

export default Product;
