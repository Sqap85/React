import { configureStore } from '@reduxjs/toolkit'; 
// Redux Toolkit'in `configureStore` fonksiyonunu import ediyoruz. 
// Bu, Redux store'u daha kolay ve standart bir şekilde yapılandırmamızı sağlar.

import counterSlice from '../redux/counterSlice'; 
// Daha önce oluşturduğumuz `counterSlice`'ı import ediyoruz. 
// Bu slice, `counter` durumunu ve onunla ilişkili reducer fonksiyonlarını içerir.

export default configureStore({
  // Redux store'u oluşturuyoruz ve dışa aktarıyoruz.
  
  reducer: {
    // Store'un `reducer` özelliğine tüm reducer'larımızı ekleriz.
    counter: counterSlice,
    // `counter` adında bir durum (state) oluşturuyoruz ve onun reducer'ını `counterSlice` olarak belirliyoruz.
    // Redux store'un yapısı şu şekilde olur:
    // { counter: <counterSlice'ın başlangıç durumu ve reducer'ı> }
  },
});