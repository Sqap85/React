import React, { useState, useCallback } from 'react';

// useCallback hook'u, useMemo ile benzer bir amaca hizmet eder, ancak onun yerine fonksiyonları optimize etmek için kullanılır. useCallback, özellikle gereksiz yeniden oluşturulan fonksiyonları engellemek amacıyla kullanılır.

// useCallback ve useMemo Arasındaki Fark:
// useMemo: Hesaplanan değerleri "hatırlamak" için kullanılır.
// useCallback: Fonksiyonları "hatırlamak" için kullanılır.

// useCallback: Fonksiyonların yeniden oluşturulmasını engeller ve yalnızca bağımlılıklar değiştiğinde yeni bir fonksiyon oluşturur.
// Kullanım Durumu: Props olarak fonksiyon geçerken veya gereksiz render'ları engellemek için kullanılır.

function App() {
  // State tanımlamaları: Kullanıcının sayıyı artırabileceği bir 'count' state'i.
  const [count, setCount] = useState(0);

  // useCallback ile fonksiyonu "memoize" ediyoruz.
  // Bu sayede 'increment' fonksiyonu yalnızca bağımlılıkları değiştiğinde yeniden oluşturulur.
  const increment = useCallback(() => {
    // 'count' state'ini artıran fonksiyon
    setCount((prevCount) => prevCount + 1);
  }, []); // Bağımlılıklar listesi boş, bu fonksiyon yalnızca ilk render'da oluşturulur.

  return (
    <div>
      <h1>useCallback Hook'u</h1>
      <p>Count: {count}</p>
      {/* Buton tıklama olayında 'increment' fonksiyonu çağrılacak */}
      {/* 'increment' fonksiyonu useCallback ile memoize edildiği için */}
      {/* yalnızca ilk render'da oluşturulur ve her render'da yeniden oluşturulmaz. */}
      <button onClick={increment}>Artır</button>
    </div>
  );
}

export default App;
