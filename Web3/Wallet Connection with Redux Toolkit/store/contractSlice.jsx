import { createSlice } from "@reduxjs/toolkit"; 

//Amaç, akıllı kontrat (smart contract) nesnesini Redux store içinde saklamak ve yönetmek

// Redux store'da saklanacak başlangıç durumu (initial state)
const initialState = {
  simpleContract: null, // Akıllı kontrat nesnesini burada saklıyoruz (başlangıçta null)
};

// Redux slice oluşturuyoruz
export const contractSlice = createSlice({
  name: "contract", // Slice'in adı (Redux state içinde "contract" olarak erişilecek)
  initialState, // Başlangıç durumunu belirtiyoruz
  reducers: {
    // Redux state'i güncellemek için reducer fonksiyonları
    setSimpleContract: (state, action) => {
      state.simpleContract = action.payload; // Gelen kontrat nesnesini state'e kaydediyoruz
    },
  },
});

// Redux için aksiyonları dışa aktarıyoruz (bileşenlerde çağırmak için)
export const { setSimpleContract } = contractSlice.actions;

// Reducer'ı dışa aktarıyoruz (Redux store'a eklemek için)
export default contractSlice.reducer;