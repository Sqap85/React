// React'tan gerekli hook'ları içe aktarıyoruz.
import { useState, useMemo } from 'react';
import './App.css';

// useMemo, bir değeri (memoized value) saklamak için kullanılır.
// Bu, her render sırasında tekrarlanan ve pahalı (zaman/performans açısından maliyetli) işlemleri önler.
// Memoization, bir değeri hesapladıktan sonra hatırlama ve sadece gerektiğinde yeniden hesaplama işlemidir.

//  Diyelim ki uygulamanın bir kısmında ağır bir işlem var (mesela büyük bir matematiksel hesaplama). Aynı zamanda, başka bir state (otherValue) arka planda değişiyor. Ancak bu, pahalı işlemi gereksiz yere tetiklememelidir. İşte useMemo burada devreye giriyor.

// useMemo'yu yalnızca pahalı hesaplamalar, büyük veri yapıları veya gereksiz render'ları önlemek amacıyla kullanmalısınız.
// Her değişken için kullanmak yerine, sadece gerçekten performans kazanımı sağlayacak durumlarda kullanmak en iyisidir.

function App() {
  // İlk state: Kullanıcının artırıp azaltabileceği bir sayı.
  const [count, setCount] = useState(0);

  // İkinci state: useMemo'nun bağımlılıklar dışında kalan bir state.
  // Bu, memoize edilen pahalı hesaplama ile hiçbir ilgisi olmadığını göstermek için kullanılıyor.
  const [otherValue, setOtherValue] = useState(0);

  // useMemo kullanarak pahalı bir hesaplama yapıyoruz.
  // Bu hesaplama yalnızca `count` değiştiğinde yeniden çalıştırılacak.
  const expensiveCalculation = useMemo(() => {
    console.log('Pahalı hesaplama çalıştırılıyor...');
    return count * 2; // `count` değerinin iki katını hesaplıyoruz.
  }, [count]); // Bu hesaplama yalnızca `count` değiştiğinde çalışır.

  return (
    <>
      {/* Başlık ve açıklamalar */}
      <h1>useMemo Kullanımı</h1>

      {/* Kullanıcının artırıp azaltabileceği count state'ini gösteriyoruz */}
      <p>Count: {count}</p>

      {/* Kullanıcının bağımsız olarak değiştirebileceği diğer state */}
      <p>Diğer Değer: {otherValue}</p>

      {/* Memoize edilen pahalı hesaplamanın sonucu */}
      <p>Pahalı Hesaplama Sonucu: {expensiveCalculation}</p>

      {/* Butonlar: Count state'ini artırmak veya azaltmak için */}
      <button onClick={() => setCount(count + 1)}>Count'u Artır</button>
      <button onClick={() => setCount(count - 1)}>Count'u Azalt</button>

      {/* Diğer state'i güncelleyen buton */}
      <button onClick={() => setOtherValue(otherValue + 1)}>Diğer State'i Güncelle</button>
    </>
  );
}

export default App;
