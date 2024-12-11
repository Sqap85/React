import { useState } from 'react';
import './App.css';
import Product from './Product';  // Product bileşenini import ediyoruz
import Container from './Container';  // Container bileşenini import ediyoruz

function App() {
  return (
    <>
      {/* Parent - Container bileşeni */}
      <Container>
        {/* Child - Product bileşeni */}
        <Product name="Shoe" price={120} />
      </Container>
    </>
  );
}

export default App;