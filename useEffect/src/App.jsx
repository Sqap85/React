import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // State tanımlamaları: firstName ve lastName değerlerini yönetiyoruz.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /**
   * useEffect, React bileşenlerinde side effects leri yönetmek için kullanılır.
   * İlk parametre bir fonksiyon (effect), ikinci parametre ise bağımlılıklardır.
   * Eğer bağımlılıklar değişirse, efekt tekrar çalışır.
   * Bir Hook olduğu için yalnızca React fonksiyon bileşenleri içinde kullanılabilir.
   */

  // Bu effect her render işleminde çalışır (bağımlılık verilmemiş).
  useEffect(() => {
    console.log("herzaman calisir");
  });

  // Bu efekt sadece bileşen ilk kez render edildiğinde çalışır (boş bağımlılık dizisiyle).
  useEffect(() => {
    console.log("ilk render edildiginde calisir");
  }, []);

  // Bu efekt, "firstName" değiştiğinde veya bileşen ilk kez render edildiğinde çalışır.
  useEffect(() => {
    console.log("ilk render edildiginde veya firstname state degeri degistiginde calisir", firstName);
  }, [firstName]);

  // Bu efekt, "lastName" değiştiğinde veya bileşen ilk kez render edildiğinde çalışır.
  useEffect(() => {
    console.log("ilk render edildiginde veya lastname state degeri degistiginde calisir", lastName);
  }, [lastName]);

  return (
    <>
      <div>
        <div>
          {/* İlk butona tıklandığında firstName güncellenir. */}
          <button
            onClick={() => {
              setFirstName("John");
            }}
          >
            Change Name
          </button>
        </div>

        <div>
          {/* İkinci butona tıklandığında lastName güncellenir. */}
          <button
            onClick={() => {
              setLastName("Doe");
            }}
          >
            Change Last Name
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
