import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // useState reacttaki degiskendir hooks denir
  // degiskenin adi, degistirmek icin fonk, useState ilk degeri
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("85");
  const [tempName, setTempName] = useState("");
  const [names, setNames] = useState(["engin", "arda"]);
  const [userInfo, setUserInfo] = useState({
    username: "Sqap85",
    password: "85",
  });
  const [count, setCount] = useState(0);

  //! bir state in set fuctionunu kullandigimizda her seferinde render edilir. buyuk kodlarda yavaslatir!

  // Sayaç artırma fonksiyonu
  function increase() {
    setCount(count + 1);
    //bir state in set fuctionunu kullandigimizda her seferinde render edilir. buyuk kodlarda yavaslatir!
  }

  // Listeye yeni isim ekleme fonksiyonu
  function addName() {
    if (tempName.trim() !== "") {
      setNames([...names, tempName]); // Mevcut listeye yeni ismi ekler
      setTempName(""); // Input alanını temizler
    }
  }

  // Kullanıcı bilgilerini güncelleme fonksiyonu
  function updateUserInfo() {
    setUserInfo({
      ...userInfo, // Mevcut bilgileri korur
      username: tempName || userInfo.username, // Geçici ismi kullanır
    });
    setTempName(""); // Input alanını temizler
  }

  return (
    <>
      {/* İsim Bilgileri */}
      <div>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
      </div>

      {/* Kullanıcı girişi için bir input alanı */}
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input
          id="nameInput"
          placeholder="Enter New Name"
          value={tempName} // Input alanını `tempName` ile bağladık
          onChange={(e) => setTempName(e.target.value)} // Kullanıcının yazdığı değeri yakaladık
        />
      </div>

      {/* İsim Güncelleme Düğmesi */}
      <div>
        <button
          onClick={() => {
            setFirstName(tempName); // `firstName` state'ini `tempName` ile günceller
            setTempName(""); // Input alanını temizler
          }}
        >
          Change First Name
        </button>
      </div>

      {/* Sayaç */}
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>Increase Count</button>
      </div>

      {/* İsimler Listesi */}
      <div>
        <h2>Names List:</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <button onClick={addName}>Add to List</button>
      </div>

      {/* Kullanıcı Bilgisi */}
      <div>
        <h2>User Info:</h2>
        <p>Username: {userInfo.username}</p>
        <p>Password: {userInfo.password}</p>
        <button onClick={updateUserInfo}>Update Username</button>
      </div>
    </>
  );
}

export default App;
