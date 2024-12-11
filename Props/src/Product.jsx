import React from "react";

function Product(props) {
    //{ name, price } diye direk alabilirdik
  // props'tan name ve price değerlerini alıyoruz
  const { name, price } = props;

  return (
    <>
      <div>Product Informations</div>
      <hr />
      <div>
        <div>Name: {name}</div> {/* Props olarak alınan name değeri */}
        <div>Price: {price}$</div> {/* Props olarak alınan price değeri */}
      </div>
    </>
  );
}

export default Product;