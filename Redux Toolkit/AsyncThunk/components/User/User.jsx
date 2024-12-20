// React kütüphanesini içe aktarıyoruz.
import React from 'react';

// user adında bir React bileşeni tanımlıyoruz.
// Bu bileşen, props olarak bir "user" nesnesi alır.
// Destructuring kullanarak doğrudan "user" nesnesine erişiyoruz.
function User({ user }) { 
  return (
    // Kullanıcı adını göstermek için bir div render ediyoruz.
    <div>
      {user.name} {/* user nesnesinin "name" alanını ekrana yazdırıyoruz. */}
    </div>
  );
}

// Bu bileşeni diğer dosyalarda kullanabilmek için dışa aktarıyoruz.
export default User;
