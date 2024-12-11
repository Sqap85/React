// Bu Bir Componentdir
// rfce kisa yoluyla olusturduk

// React'i import ettik
import React from "react";

// Kullanıcılar dizisini adlandırılmış export ile dışa aktarıyoruz
// Bu diziyi başka bir dosyada ismiyle içe aktarabiliriz
export const users = [
  {
    usurname: "engin",
    password: "85",
  },
  {
    usurname: "kaan",
    password: "31",
  },
];

// Login bileşeni oluşturuluyor
function Login() {
  return (
    <>
      {/* Fragment kullanarak gereksiz div'ler eklemeden birden fazla öğe döndürebiliyoruz */}
      <div>
        <div>
          <p>Kullanıcı Adınız</p>
          <input type="text" placeholder="Kullanıcı Adı" />
        </div>

        <div>
          <p>Şifreniz</p>
          <input type="password" placeholder="Şifre" />
        </div>

        <button style={{ marginTop: "20px" }}>Giriş yap</button>
      </div>

      {/* Fragment (Kapsayıcı) sonu */}
    </>
  );
}

// Burada Login bileşenini **default export** ile dışa aktarıyoruz
// Bu sayede başka bir dosyada bu bileşeni istediğimiz isimle içe aktarabiliriz
export default Login;