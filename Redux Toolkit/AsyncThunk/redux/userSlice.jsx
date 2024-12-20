// Redux Toolkit'ten createAsyncThunk ve createSlice fonksiyonlarını içe aktarıyoruz.
// createAsyncThunk: Asenkron işlemler (örneğin HTTP istekleri) için kullanılır.
// createSlice: Redux slice'ı oluşturmak için kullanılır.
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// HTTP isteklerini yapmak için axios'u içe aktarıyoruz.
import axios from "axios";

// Redux store için başlangıç durumu (initial state) tanımlıyoruz.
const initialState = {
  users: [], // Kullanıcı listesini saklayacak bir dizi.
  loading: false, // Yükleme durumu kontrolü için bir bayrak.
};

// getAllUsers adında bir asenkron thunk oluşturuyoruz.
// Bu thunk, kullanıcıları almak için bir API çağrısı yapar.
export const getAllUsers = createAsyncThunk("users", async () => {
  // axios ile JSONPlaceholder API'den kullanıcıları alıyoruz.
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");

  // Gelen veriyi konsola yazdırıyoruz (debugging amaçlı).
  console.log(response.data);

  // API'den gelen kullanıcı listesini geri döndürüyoruz.
  return response.data;
});

// userSlice adında bir slice oluşturuyoruz.
// Bu slice, kullanıcılarla ilgili Redux durumunu ve işlemleri tanımlar.
export const userSlice = createSlice({
  name: "users", // Slice'ın ismi.
  initialState, // Başlangıç durumu.
  reducers: {
    // Bu alanda yalnızca senkron işlemler için reducer'lar tanımlanabilir.
    // Ancak şu an bu slice'da herhangi bir senkron işlem tanımlanmamış.
    // Örneğin: Kullanıcı ekleme ya da temizleme gibi işlemler burada olabilir.
  },
  extraReducers: (builder) => {
    // Asenkron işlemler (örneğin HTTP istekleri) için ekstra reducer'lar tanımlıyoruz.
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      // getAllUsers thunk'ı başarılı bir şekilde tamamlandığında burası çalışır.
      // API'den dönen kullanıcıları Redux store'a kaydediyoruz.
      state.users = action.payload;
    });
  },
});

// userSlice içinde tanımlanan senkron işlemler dışa aktarılıyor (şu an boş).
export const {} = userSlice.actions;

// Bu slice'ın reducer fonksiyonunu dışa aktarıyoruz.
// Redux store, bu reducer'ı kullanarak durumu yönetir.
export default userSlice.reducer;
