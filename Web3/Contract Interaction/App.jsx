import React, { useState } from "react"; // React ve useState hook'u içe aktarılıyor.
import { ethers } from "ethers"; // ethers.js kütüphanesi içe aktarılıyor, Ethereum ile etkileşim için kullanılır.

export default function App() {
  // React state tanımları
  const [value, setValue] = useState(""); // Kullanıcının girdiği değeri tutar.
  const [contractValue, setContractValue] = useState(""); // Akıllı sözleşmeden okunan değeri tutar.
  const [account, setAccount] = useState(null); // Kullanıcının cüzdan adresini tutar.
  const [network, setNetwork] = useState(null); // Bağlı olduğu ağın adını tutar.
  const [balance, setBalance] = useState(null); // Kullanıcının Ethereum bakiyesini tutar.
  const [signer, setSigner] = useState(null); // Ethereum işlemleri imzalamak için gerekli signer objesi.

  // Akıllı sözleşme adresi ve ABI (Application Binary Interface)
  const contractAddress = "0x04a9bf965FeCDF603a0d8245AAf38f4Bf7C37887"; // Akıllı sözleşmenin blockchain üzerindeki adresi.
  const abi = [ 
    // Akıllı sözleşmenin iki fonksiyonunu tanımlayan ABI (getValue ve setValue). bunu remix'ten alabiliriz.
    {
      "inputs": [],
      "name": "getValue", // Sözleşmeden değer okuma fonksiyonu.
      "outputs": [
        {
          "internalType": "uint256", // Dönen değerin uint256 türünde olduğunu belirtir.
          "name": "",
          "type": "uint256",
        },
      ],
      "stateMutability": "view", // Fonksiyon blockchain durumunu değiştirmez.
      "type": "function", 
    },
    {
      "inputs": [
        {
          "internalType": "uint256", // Girdi olarak bir uint256 değeri alır.
          "name": "_value", // Girdi değişkeninin adı.
          "type": "uint256",
        },
      ],
      "name": "setValue", // Sözleşmeye değer yazma fonksiyonu.
      "outputs": [],
      "stateMutability": "nonpayable", // Fonksiyon için ether gönderilmesi gerekmez.
      "type": "function",
    },
  ];

  // MetaMask yüklü mü kontrol edilir.
  const checkMetaMask = () => {
    if (!window.ethereum) { // Eğer MetaMask tarayıcıda yüklü değilse:
      alert("MetaMask yüklü değil. Lütfen yükleyin!");
      return false;
    }
    return true; // MetaMask yüklüyse true döner.
  };

  // Kullanıcının cüzdanını bağlar.
  const connectWallet = async () => {
    if (window.ethereum) { // Eğer MetaMask yüklüyse:
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts", // Kullanıcının MetaMask cüzdanını bağlamasını ister.
        });
        const provider = new ethers.BrowserProvider(window.ethereum); // Ethereum sağlayıcı oluşturulur.
        const signer = await provider.getSigner(); // İşlem imzalamak için signer oluşturulur.
        const network = await provider.getNetwork(); // Kullanıcının bağlı olduğu ağ alınır.
        const balance = await provider.getBalance(accounts[0]); // Kullanıcının ETH bakiyesi alınır.

        // React state'leri güncellenir.
        setAccount(accounts[0]); // Kullanıcının cüzdan adresi kaydedilir.
        setNetwork(network.name); // Ağ adı kaydedilir.
        setBalance(ethers.formatEther(balance)); // ETH bakiyesi Ether formatına çevrilerek kaydedilir.
        setSigner(signer); // Signer kaydedilir.

        console.log("Connected account:", accounts[0]); // Konsola bağlanan adres yazdırılır.
        console.log("Signer:", signer); // Konsola signer yazdırılır.
      } catch (error) {
        console.error("Connection error:", error); // Bağlantı hatası konsola yazdırılır.
        alert(`Bağlantı hatası: ${error.message}`);
      }
    } else {
      alert("MetaMask tarayıcıda yüklü değil!"); // MetaMask yoksa kullanıcı bilgilendirilir.
    }
  };

  // Akıllı sözleşmeden değer okuma fonksiyonu.
  const readContract = async () => {
    try {
      if (checkMetaMask()) { // MetaMask kontrolü yapılır.
        const provider = new ethers.BrowserProvider(window.ethereum); // Ethereum sağlayıcı oluşturulur.
        const contract = new ethers.Contract(contractAddress, abi, provider); // Akıllı sözleşme instance oluşturulur.
        
        const result = await contract.getValue(); // Sözleşmeden getValue fonksiyonu çağrılır.
        setContractValue(result.toString()); // Okunan değer state'e kaydedilir.
        console.log("Sözleşmeden okunan değer:", result.toString());
      }
    } catch (error) {
      console.error("Değer okunurken hata:", error); // Hata konsola yazdırılır.
      alert(`Değer okunurken bir hata oluştu: ${error.message}`);
    }
  };

  // Akıllı sözleşmeye değer yazma fonksiyonu.
  const writeContract = async () => {
    try {
      if (checkMetaMask()) { // MetaMask kontrolü yapılır.
        const contract = new ethers.Contract(contractAddress, abi, signer); // Akıllı sözleşme instance oluşturulur.
        const tx = await contract.setValue(value); // Sözleşmenin setValue fonksiyonu çağrılır.
        console.log("İşlem gönderildi:", tx.hash); // İşlem hash değeri konsola yazdırılır.
        await tx.wait(); // İşlemin blockchain üzerinde onaylanması beklenir.
        alert("Değer başarıyla güncellendi!");
        setValue(""); // Kullanıcı girişi sıfırlanır.
      }
    } catch (error) {
      console.error("Değer yazılırken hata:", error); // Hata konsola yazdırılır.
      alert(`Değer yazılırken bir hata oluştu: ${error.message}`);
    }
  };

  // Uygulamanın arayüzü
  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Storage Contract</h1>
      <div>
        <button onClick={connectWallet}>Connect Wallet</button> {/* Cüzdan bağlama düğmesi */}
      </div>
      <div>
        <p>Connected Account: {account || "Not connected"}</p> {/* Bağlanan hesap */}
        <p>Network: {network || "Unknown"}</p> {/* Bağlanan ağ */}
        <p>Balance: {balance ? `${balance} ETH` : "Unknown"}</p> {/* ETH bakiyesi */}
      </div>
      <div>
        <button onClick={readContract}>Get Stored Value</button> {/* Değer okuma düğmesi */}
        {contractValue && <p>Stored Value: {contractValue}</p>} {/* Okunan değer */}
      </div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)} // Kullanıcı girdisi
          placeholder="Enter a new value"
        />
        <button onClick={writeContract}>Set Value</button> {/* Değer yazma düğmesi */}
      </div>
    </div>
  );
}
