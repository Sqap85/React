// Redux Toolkit'in `configureStore` fonksiyonunu içe aktarıyoruz.
// `configureStore`: Redux store'u daha kolay ve standart bir şekilde yapılandırmak için kullanılır.
import { configureStore } from '@reduxjs/toolkit'; 

// `userSlice` dosyasından userReducer'ı içe aktarıyoruz.
// Bu reducer, kullanıcılarla ilgili durumu yönetecektir.
import userReducer from '../redux/userSlice';

// Redux store'u oluşturup yapılandırıyoruz ve dışa aktarıyoruz.
export default configureStore({
  // `reducer` nesnesi, uygulamanın tüm reducer'larını tanımlar.
  // Bu nesnenin her bir anahtarı, Redux store'daki bir dilim (slice) adını temsil eder.
  reducer: {
    // `user` dilimi, kullanıcılarla ilgili durumu yönetecek.
    user: userReducer,
  },
});
