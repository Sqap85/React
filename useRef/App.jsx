import React, { useState, useRef } from 'react';

// useRef React hook'u, özellikle DOM öğeleri ve değerlerin referanslarını tutmak için kullanılır. useRef, componentler arasında değerlerin korunmasını sağlar, ancak render tetiklemesi yapmaz.

// Temel Kullanım:
// DOM Erişimi: useRef genellikle DOM öğelerine doğrudan erişmek için kullanılır.
// Mutable Reference (Değiştirilebilir Referans): useRef, bileşenlerin render edilmesini tetiklemeden, bir değeri saklamak için de kullanılabilir.

function App() {
  // DOM elemanına referans tutmak için useRef kullanıyoruz
  const inputRef = useRef(null); // inputRef şu an null, sonra input öğesine bağlanacak

  // input'un değerini tutan state
  const [inputValue, setInputValue] = useState('');

  // useRef ile input'a odaklanma fonksiyonu
  const focusInput = () => {
    // inputRef.current ile DOM elemanına doğrudan erişiyoruz
    inputRef.current.focus();
  };

  // input değeri değiştiğinde state güncelleniyor
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>useRef Örneği</h1>
      
      {/* input öğesini render ediyoruz */}
      <input 
        ref={inputRef} // useRef ile referansı bağladık
        value={inputValue} // input değerini state ile bağladık
        onChange={handleChange} // input değerini güncelleyen fonksiyon
      />
      
      {/* input'a odaklanmayı sağlayan buton */}
      <button onClick={focusInput}>Input'a Odaklan</button>

      <p>Input Değeri: {inputValue}</p>
    </div>
  );
}

export default App;
