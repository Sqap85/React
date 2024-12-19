import { createSlice } from '@reduxjs/toolkit';
/*
Redux Slice Nedir?

Redux Toolkit’te slice, bir durumun (state) ve o durumu değiştirmek için gereken reducer’ların bir arada tanımlandığı bir yapıdır. Her slice, bir uygulama özelliğine veya durum dilimine (örneğin, kullanıcı, sepet, sayaç gibi) odaklanır. */

const counterSlice = createSlice({
  name: 'counter', // Slice için bir isim (aksiyonların isimlendirilmesinde kullanılır)
  initialState: { value: 0 }, // Başlangıç durumu
  reducers: { // Durumu değiştiren fonksiyonlar
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Aksiyonlar otomatik olarak oluşturulur
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Reducer, store’a eklenmek için dışa aktarılır
export default counterSlice.reducer;