import { useEffect } from 'react'; // React'ten useEffect hook'unu içeri aktarıyoruz.
import axios from 'axios'; // HTTP isteklerini yapmak için axios kütüphanesini içeri aktarıyoruz.

const BASE_URL = "http://localhost:3000/"; // API'nin temel URL'sini sabit bir değişken olarak tanımlıyoruz.

function App() {

//-------- GET İstekleri ----------
  const getAllUsers = async () => {
    // axios.get(url, config)
    // Burada config parametresi isteğe bağlıdır. Eğer config sağlanmazsa, varsayılan ayarlar kullanılır.
    const response = await axios.get(BASE_URL + "users");
    console.log("AllUsers:", response);
  };

  const getUserById = async (userId) => {
    // config parametresi isteğe bağlıdır ve genelde başlık (headers) veya diğer özel ayarları belirlemek için kullanılır.
    const response = await axios.get(`${BASE_URL}users/${userId}`);
    console.log("UserById:", response);
  };

//-------- POST İstekleri --------
const createUser = async (newUser) => {
    // axios.post(url, data, config)
    // Burada config isteğe bağlıdır. Örneğin, kimlik doğrulama başlıkları göndermek istiyorsanız kullanılabilir.
    const response = await axios.post(`${BASE_URL}users/`, newUser);
    console.log("Eklenen User:", response.data);
};

//-------- PUT İstekleri --------
const updateUser = async (userId, newValues) => {
    // axios.put(url, data, config)
    // config isteğe bağlıdır. Çoğunlukla headers gibi ek bilgiler göndermek için kullanılır.
    const response = await axios.put(`${BASE_URL}users/${userId}`, newValues);
    console.log(`Güncel ${userId} ID'li kullanicinin değerleri:`, response.data);
};

//-------- DELETE İstekleri --------
const deletUserById = async (userId) => {
    // axios.delete(url, config)
    // config isteğe bağlıdır ve genelde özel başlıklar (headers) eklemek için kullanılır.
    const response = await axios.delete(`${BASE_URL}users/${userId}`);
    console.log("Deleted User:", response.data);
};

useEffect(() => {
    getAllUsers();
    getUserById(85);

    const newUser = {
        "username": "yarrakhasan",
        "password": "123"
    };

    createUser(newUser);

    updateUser("85", {
        "username": "Updated Sqap",
        "password": "sss"
    });

    deletUserById("69");

}, []); // Boş bir bağımlılık dizisi, bu kodun yalnızca bileşen yüklendiğinde çalışacağı anlamına gelir.

return (
    <div>

    </div>
);
}

export default App;
