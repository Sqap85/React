import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [network, setNetwork] = useState(null);
  const [signer, setSigner] = useState(null);

  // MetaMask bağlantısı için fonksiyon
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Kullanıcının MetaMask'ını bağlaması için izin isteme
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner(); // Signer oluşturma
        const network = await provider.getNetwork();
        const balance = await provider.getBalance(accounts[0]);

        setAccount(accounts[0]);
        setNetwork(network.name);
        setBalance(ethers.formatEther(balance));
        setSigner(signer);

        console.log("Connected account:", accounts[0]);
        console.log("Signer:", signer);
      } catch (error) {
        console.error("Connection error:", error);
      }
    } else {
      alert("MetaMask tarayıcıda yüklü değil!");
    }
  };

  // MetaMask olaylarını dinle
  useEffect(() => {
    if (window.ethereum) {
      // Hesap değişikliği
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || null);
      });

      // Ağ değişikliği
      window.ethereum.on("chainChanged", () => {
        window.location.reload(); // Ağ değiştiğinde sayfayı yenile
      });
    }
  }, []);

  // Bir işlem gönderme örneği (ETH transferi)
  const sendTransaction = async () => {
    if (!signer) {
      alert("Önce MetaMask'a bağlanmalısınız!");
      return;
    }

    try {
      const tx = await signer.sendTransaction({
        to: "0xAlıcıAdresiniBurayaYaz",
        value: ethers.parseEther("0.01"), // Gönderilecek miktar (ETH)
      });
      console.log("Transaction gönderildi:", tx);
      alert(`Transaction gönderildi! Hash: ${tx.hash}`);
    } catch (error) {
      console.error("Transaction error:", error);
    }
  };

  return (
    <div className="App">
      <h1>MetaMask'a Bağlan</h1>
      {account ? (
        <div>
          <p>Bağlı Hesap: {account}</p>
          <p>Bakiye: {balance} ETH</p>
          <p>Ağ: {network}</p>
          <button onClick={sendTransaction}>0.01 ETH Gönder</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Cüzdana Bağlan</button>
      )}
    </div>
  );
}

export default App;
