// React kütüphanesini içe aktarıyoruz.
// useState hook'unu, state yönetimi için React'ten alıyoruz.
import React from 'react'
import { useState } from 'react';

// Custom Hook'lar "use" ile başlamak zorundadır. Bu, React'e bu fonksiyonun bir Hook olduğunu belirtir.
// useCounter adlı bir Custom Hook tanımlıyoruz.
function useCounter() {
    // "count" adında bir state değişkeni oluşturuyoruz ve başlangıç değerini 0 olarak belirliyoruz.
    // "setCount" fonksiyonu, "count" state'ini güncellemek için kullanılır.
    const [count, setCount] = useState(0);

    // "increase" fonksiyonu, "count" değerini bir artırmak için kullanılır.
    const increase = () => {
        setCount(count + 1); // setCount ile count değerini güncelliyoruz.
    };
    
    // "decrease" fonksiyonu, "count" değerini bir azaltmak için kullanılır.
    const decrease = () => {
        setCount(count - 1); // setCount ile count değerini güncelliyoruz.
    };

    // Bu Hook'un geri döndürdüğü değerler:
    // - "count": Şu anki sayacın değerini temsil eder.
    // - "increase": Sayacı artıran fonksiyon.
    // - "decrease": Sayacı azaltan fonksiyon.
    return {
        count,
        increase,
        decrease
    };
}

// Bu Custom Hook'u dışarıya aktarıyoruz ki başka dosyalarda kullanılabilsin.
export default useCounter;