import React from "react";
// Product bileşeni, her bir ürünün görselleştirilmesini sağlar.
import Product from "./Product";
// Ürün verilerini içeren JSON dosyasını içe aktarıyoruz.
import products from "../../data/products.json";

function Products() {
  return (
    <div>
      {/* Tüm ürünleri listelemek için map kullanıyoruz */}
      {products.map((product) => {
        // Her bir ürün için Product bileşenini çağırıyoruz.
        // "key" özelliği, benzersiz bir kimlik (id) ile belirtilir, bu React'in performansını artırır.
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
