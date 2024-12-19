import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// Redux'un `useSelector` ve `useDispatch` hook'larını import ediyoruz.
// `useSelector` Redux store'dan bir durumu seçip kullanmamızı sağlar.
// `useDispatch` Redux aksiyonlarını göndermek (dispatch) için kullanılır.

import { decrement, increment } from "./redux/counterSlice";

function App() {
  const { value } = useSelector((store) => store.counter);
  // Redux store'un `counter` diliminden `value` durumunu alıyoruz.
  // `store.counter` ile `counterSlice`'ın yönettiği duruma erişiyoruz.
  // destructuring ile sadece `value`'yu aldık.

  const dispatch = useDispatch(); 
  // Redux'un `useDispatch` hook'unu çağırarak `dispatch` fonksiyonunu elde ediyoruz.
  // `dispatch`, Redux store'a aksiyon göndermek (dispatch etmek) için kullanılır.
  // Bu, bir aksiyonun ilgili reducer'a iletilmesini ve store'daki durumun güncellenmesini sağlar.
  // Redux aksiyonları, store'da durumu değiştirmek için reducer'lar tarafından işlenir.
  // `dispatch` ile bir aksiyon gönderdiğimizde, Redux şu adımları takip eder:
  // 1. Gönderilen aksiyonu alır (örneğin: increment, decrement gibi).
  // 2. Store'daki ilgili reducer'ı bulur.
  // 3. Reducer'ı çalıştırarak durumu günceller.
  // 4. Güncellenmiş durumu bileşenlere bildirir.
  

  console.log(value);
  // `value` değerini konsola yazdırarak Redux durumunun doğru şekilde alınıp alınmadığını kontrol ediyoruz.

  return (
    <div>
      <div>
        {/* Redux durumunu UI'ye yazdırıyoruz. */}
        <div>{value}</div>

        {/* Increment butonuna tıklanıldığında `increment` aksiyonunu dispatch ediyoruz. */}
        <button onClick={() => dispatch(increment())}>increment</button>

        {/* Decrement butonuna tıklanıldığında `decrement` aksiyonunu dispatch ediyoruz. */}
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default App;
