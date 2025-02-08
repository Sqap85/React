import { useEffect, useState } from "react";
import { useDispatch, batch } from "react-redux";
import { ethers } from "ethers";
import "./App.css";

// Redux store'dan action'ları içe aktar
import { setProvider, setAddress, setSigner, setAccount } from "./store/dataSlice";
import { setSimpleContract } from "./store/contractSlice";

// Hooks
import useProvider from "./hooks/useProvider";
import useSigner from "./hooks/useSigner";
import useContract from "./hooks/useContract";

// Kontrat bilgileri ve ABI
import { contractAddress } from "./consts/simpleContractAddress";
import contractABI from "./consts/simpleContractABI";

function App() {
  const dispatch = useDispatch();
  const provider = useProvider(); 
  const signer = useSigner(); 
  const contract = useContract(); 

  const [isConnected, setIsConnected] = useState(false);
  const [storedValue, setStoredValue] = useState(null);
  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    if (!window.ethereum) {
      alert("MetaMask tarayıcıda yüklü değil!");
      return;
    }

    if (!provider) {  // Eğer Redux'ta provider yoksa oluştur
      const setupProvider = async () => {
        try {
          const providerInstance = new ethers.BrowserProvider(window.ethereum);
          dispatch(setProvider(providerInstance));
        } catch (error) {
          console.error("Provider kurulurken hata:", error);
        }
      };

      setupProvider();
    }
  }, [provider]);  // Provider varsa tekrar çalışmaz

  const connect = async () => {
    if (!window.ethereum) {
      alert("MetaMask tarayıcıda yüklü değil!");
      return;
    }

    try {
      let providerInstance = provider;
      if (!providerInstance) { 
        providerInstance = new ethers.BrowserProvider(window.ethereum);
        dispatch(setProvider(providerInstance));
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const signerInstance = await providerInstance.getSigner();
      const address = await signerInstance.getAddress();

      batch(() => {
        dispatch(setSigner(signerInstance));
        dispatch(setAddress(address));
        dispatch(setAccount(account));
      });

      if (!contract) { 
        const contractInstance = new ethers.Contract(
          contractAddress,
          contractABI,
          signerInstance
        );
        dispatch(setSimpleContract(contractInstance));
      }

      alert(`Cüzdan Bağlandı: ${address}`);
      setIsConnected(true);
    } catch (error) {
      console.error("Bağlantı hatası:", error);
      alert(`Bağlantı sırasında hata oluştu: ${error.message}`);
    }
  };

  const getStoredValue = async () => {
    if (!contract) {
      alert("Kontrat yüklenmedi!");
      return;
    }
    try {
      const value = await contract.getValue();
      setStoredValue(value.toString());
    } catch (error) {
      console.error("Değer alınırken hata:", error);
      alert("Kontrattan değer alınamadı!");
    }
  };

  const setNewValueOnContract = async () => {
    if (!contract || !signer) {
      alert("Bağlı bir kontrat veya signer bulunamadı!");
      return;
    }

    if (newValue.trim() === "" || isNaN(newValue)) {
      alert("Lütfen geçerli bir sayı girin!");
      return;
    }

    try {
      const tx = await contract.setValue(newValue);
      await tx.wait();
      alert("Değer başarıyla güncellendi!");
      setNewValue("");
      getStoredValue();
    } catch (error) {
      console.error("Değer güncellenirken hata:", error);
      alert("Değer güncellenirken hata oluştu!");
    }
  };

  return (
    <div>
      <h1>Wallet Connection & SimpleStorage</h1>
      {isConnected ? (
        <div>
          <p>Cüzdan başarıyla bağlandı!</p>
          <button onClick={getStoredValue}>Get Stored Value</button>
          <p>Stored Value: {storedValue !== null ? storedValue : "Not fetched yet"}</p>
          <input
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Enter new value"
          />
          <button onClick={setNewValueOnContract}>Set New Value</button>
        </div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;
