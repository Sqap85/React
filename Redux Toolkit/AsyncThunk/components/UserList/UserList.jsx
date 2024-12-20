// React ve gerekli hook'ları içe aktarıyoruz.
import React, { useEffect } from "react"; 
import User from "../User/User.jsx";
// Redux'un useDispatch ve useSelector hook'larını içe aktarıyoruz.
// useDispatch: Redux store'a aksiyon göndermek için kullanılır.
// useSelector: Redux store'daki durumu okumak için kullanılır.
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/userSlice";
// UserList isimli bir React bileşeni tanımlıyoruz.
function UserList() { 
  // Redux store'daki "user" slice'ını alıyoruz ve içindeki "users" değerini destructuring ile çıkartıyoruz.
  const { users } = useSelector((store) => store.user);

  // users listesini konsola yazdırıyoruz (debugging amaçlı).
  console.log(users);

  // Redux aksiyonlarını çağırmak için dispatch fonksiyonunu alıyoruz.
  const dispatch = useDispatch();

  // useEffect hook'u, bileşen render edildikten sonra çalışır.
  // Bu örnekte, getAllUsers aksiyonu bileşen ilk kez yüklendiğinde çağrılıyor.
  useEffect(() => {
    dispatch(getAllUsers());
  }, []); // Boş bağımlılık dizisi: sadece ilk render'da çalışır.

  return (
    <div>
      {
        // Eğer "users" listesi doluysa, her kullanıcıyı render eden bir döngü başlatıyoruz.
        users && users.map((user) => (
          <User key={user.id} user={user} />
        ))
      }
    </div>
  );
}

// Bu bileşeni diğer dosyalarda kullanabilmek için dışa aktarıyoruz.
export default UserList;
