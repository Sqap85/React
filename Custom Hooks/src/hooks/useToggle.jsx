import React, { useState } from "react";

// Custom Hook'lar "use" ile başlamalıdır.
// "useToggle", bir boolean (doğru/yanlış) durumunu yönetmek için bir Hook sağlar.
function useToggle() {
  // "open" adında bir state değişkeni tanımlıyoruz ve başlangıç değerini "false" olarak belirliyoruz.
  // "setOpen" fonksiyonu, "open" state'ini güncellemek için kullanılır.
  const [open, setOpen] = useState(false);

  // "change" fonksiyonu, "open" durumunu tersine çevirir.
  // Eğer "open" true ise false yapar; false ise true yapar.
  const change = () => {
    setOpen(!open); // "!" operatörü, boolean değeri tersine çevirir.
  };

  // Hook, iki şeyi geri döndürür:
  // 1. "open": Şu anki boolean durumunu temsil eder.
  // 2. "change": Durumu tersine çeviren bir fonksiyon.
  return {
    open,
    change,
  };
}

export default useToggle;
