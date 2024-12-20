import React from 'react';
// useParams, React Router'dan gelir ve URL'deki dinamik parametreleri almayı sağlar.
import { useParams } from 'react-router-dom';
// Ürün verilerini içeren JSON dosyasını içe aktarıyoruz.
import products from '../../data/products.json';
// Ürün bileşeni içe aktarılıyor.
import Product from './Product';

function ProductDetails() {
  // URL'deki dinamik ":id" parametresini alıyoruz.
  const { id } = useParams();

  return (
    <div>
      {/* Sayfanın başlığı */}
      <h1>Product Details</h1>
      <hr />

      {/* Ürünler listesinden eşleşen ürünü buluyor ve detaylarını gösteriyoruz. */}
      {
        products && products.map((product) => {
          // Eğer ürünün id'si URL'deki id parametresiyle eşleşiyorsa:
          if (product.id == id) {
            // Eşleşen ürünü Product bileşenine göndererek render ediyoruz.
            return <Product product={product} key={product.id} />;
          }
        })
      }
    </div>
  );
}

export default ProductDetails;
