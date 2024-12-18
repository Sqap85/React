import React, { useState } from "react";
import "../Currency/Currency.css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

// API'nin temel URL'si
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

// API anahtarınız
let API_KEY = "fca_live_cEGlfT43w1r05UoTGwQvJFNtN3g1alZHcggcJfQu";

function Currency() {
  // Asenkron olarak API'den döviz kurları alınıp hesaplama yapılır
  const exchange = async () => {
    // API'ye istek atılır ve döviz verileri alınır
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );

    // Hesaplanan sonuç state'e kaydedilir (sonuç 3 basamaklı yuvarlanır)
    setResult((response.data.data[toCurrency] * amount).toFixed(3));
  };

  // Kullanıcının girdiği miktar
  const [amount, setAmount] = useState();
  // Kullanıcının seçtiği kaynak para birimi
  const [fromCurrency, setfromCurrency] = useState("TRY");
  // Kullanıcının seçtiği hedef para birimi
  const [toCurrency, setToCurrency] = useState("USD");
  // Hesaplama sonucu
  const [result, setResult] = useState();

  return (
    <div className="currency-div">
      {/* Uygulamanın başlığı */}
      <div>
        <h3 className="header">EXCHANGE RATE CALCULATOR</h3>
      </div>

      <div>
        {/* Kullanıcıdan miktar girişi al */}
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        
        {/* Kullanıcının kaynak para birimini seçmesi için dropdown */}
        <select
          onChange={(e) => {
            setfromCurrency(e.target.value);
          }}
          className="from-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>GBP</option>
          <option>EUR</option>
        </select>
        
        {/* İkon (yön göstergesi) */}
        <FaArrowRight className="arrow" />

        {/* Kullanıcının hedef para birimini seçmesi için dropdown */}
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>TRY</option>
        </select>

        {/* Hesaplama sonucu (yalnızca okunabilir) */}
        <input type="number" className="result" value={result} readOnly />
      </div>

      {/* Hesaplama işlemini başlatan buton */}
      <div>
        <button onClick={exchange} className="button">
          Calculate
        </button>
      </div>
    </div>
  );
}

export default Currency;
