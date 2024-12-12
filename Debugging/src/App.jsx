import { useState } from 'react';
import './App.css';

function App() {
  // İki sınav notu için state tanımlanıyor
  const [vize1, setVize1] = useState(0); // İlk vize notu
  const [vize2, setVize2] = useState(0); // İkinci vize notu

  // İki sayıyı toplayan fonksiyon
  const sum = (o1, o2) => o1 + o2;

  // Hesaplanan sonucu konsola yazdıran fonksiyon
  const print = (e) => console.log("Average: " + e);


  // Debugging noktasını ekledik
  debugger; // Kod buraya ulaştığında tarayıcı debugger'ı durur.
  // inspect -> application dan gorebilirsin

  // Ortalama hesaplayan fonksiyon
  const average = () => {
    let cvp = sum(vize1, vize2) / 2; // Notların toplamını alıp ikiye bölüyor
    print(cvp); // Konsola sonucu yazdırıyor
  };

  return (
    <>
      <div>
        <div>
          {/* İlk sınav notu için giriş alanı */}
          <input
            type="number"
            value={vize1}// onChange den aldigi degeri buraya ekliyor
            onChange={(e) => setVize1(Number(e.target.value))} // Kullanıcı girdisini state'e kaydediyor
          />
        </div>
        <div>
          {/* İkinci sınav notu için giriş alanı */}
          <input
            type="number"
            value={vize2}
            onChange={(e) => setVize2(Number(e.target.value))} // Kullanıcı girdisini state'e kaydediyor
          />
        </div>
        {/* Ortalama hesaplama butonu */}
        <button onClick={average}>Calculate Average</button>
      </div>
    </>
  );
}

export default App;