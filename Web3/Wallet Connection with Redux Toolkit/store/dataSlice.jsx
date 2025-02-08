import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu (Redux state'in başlangıç değerleri)
const initialState = {
  provider: null, // Ethereum sağlayıcısı (MetaMask üzerinden alınan provider)
  signer: null, // Kullanıcının işlemleri imzalamasını sağlayan Ethereum signer
  address: null, // Kullanıcının bağlandığı cüzdan adresi
  account: null, // Kullanıcının MetaMask'ta seçtiği ilk hesabın adresi
};

// 📌 Redux slice (dilim) oluşturuyoruz (Bu, Redux store'un bir parçasıdır)
export const dataSlice = createSlice({
  name: "data", // Slice'in adı (Redux state içinde "data" olarak erişilecek)
  initialState, // Başlangıç durumunu belirtiyoruz
  reducers: {
    // Redux state'i güncellemek için reducer fonksiyonları
    setProvider: (state, action) => {
      state.provider = action.payload;
    },

    setSigner: (state, action) => {
      state.signer = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

//Reducer fonksiyonları için aksiyonları dışa aktarıyoruz (Bunları bileşenlerde çağırabiliriz)
export const { setProvider, setSigner, setAddress, setAccount } =
  dataSlice.actions;

//Reducer'ı dışa aktarıyoruz (Redux store'a eklemek için)
export default dataSlice.reducer;
