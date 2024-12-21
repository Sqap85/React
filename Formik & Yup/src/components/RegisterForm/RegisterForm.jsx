import React from "react";
import { useFormik } from "formik"; // Formik hook'unu kullanıyoruz, form işlemleri için
import "./RegisterForm.css"; // CSS dosyasını import ediyoruz
import { RegisterFormSchema } from "../Schemas/RegisterFormSchema"; // Validation için Yup şemasını import ediyoruz

function RegisterForm() {
  // Form submit işleminde yapılacak işlemler
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm(); // Form gönderildikten sonra formu sıfırlıyoruz
      alert("Aferin Lolipop");
    }, 1000);
  };

  // useFormik hook'u ile form durumunu yönetiyoruz
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "", // Başlangıçta form değerlerini boş bırakıyoruz
      age: "",
      password: "",
      confirmPassword: "",
      term: false, // Checkbox için başlangıç değeri
    },
    validationSchema: RegisterFormSchema, // Formun doğrulama şemasını burada belirtiyoruz (Yup ile)
    validateOnBlur: false, // Blur (alan dışına tıklama) sırasında doğrulamayı devre dışı bırakır
    validateOnChange: false, // Değişiklik sırasında doğrulamayı devre dışı bırakır Kullanıcı formu doldururken: Hatalar gösterilmeyecek.

    onSubmit: submit, // Form gönderildiğinde çalışacak fonksiyonu belirtiyoruz
  });

  return (
    <div className="baba">
      <form onSubmit={handleSubmit}>
        {" "}
        {/* handleSubmit, Formik'in submit işlevini çağırır */}
        {/* Email input alanı */}
        <div>
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Your Email"
            value={values.email} // Formik değerini burada bağlıyoruz
            onChange={handleChange} // Değeri güncellemek için handleChange fonksiyonu
          />
          {/* touched.email: Kullanıcı email alanına dokundu mu? */}
          {/* errors.email: Email alanında doğrulama hatası var mı? */}
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p> // Hata mesajını stilize ettik
          )}
        </div>
        {/* Age input alanı */}
        <div>
          <label>Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter Your Age"
            value={values.age}
            onChange={handleChange}
          />
          {/* touched.age: Kullanıcı yaş alanına dokundu mu? */}
          {/* errors.age: Yaş alanında doğrulama hatası var mı? */}
          {touched.age && errors.age && (
            <p className="error">{errors.age}</p> // Hata mesajını stilize ettik
          )}
        </div>
        {/* Password input alanı */}
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={values.password}
            onChange={handleChange}
          />
          {/* touched.password: Kullanıcı şifre alanına dokundu mu? */}
          {/* errors.password: Şifre alanında doğrulama hatası var mı? */}
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p> // Hata mesajını stilize ettik
          )}
        </div>
        {/* Confirm Password input alanı */}
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Your Password Again"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {/* touched.confirmPassword: Kullanıcı şifre tekrar alanına dokundu mu? */}
          {/* errors.confirmPassword: Şifre tekrar alanında doğrulama hatası var mı? */}
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p> // Hata mesajını stilize ettik
          )}
        </div>
        {/* Terms of Service checkbox */}
        <div>
          <input
            type="checkbox"
            id="term"
            checked={values.term} // Checkbox değeri, Formik ile bağlanıyor
            onChange={handleChange}
          />
          <label>I Accept the Term</label>
          {/* touched.term: Kullanıcı şartlar kutusuna dokundu mu? */}
          {/* errors.term: Şartlar kutusunda doğrulama hatası var mı? */}
          {touched.term && errors.term && (
            <p className="error">{errors.term}</p> // Hata mesajını stilize ettik
          )}
        </div>
        {/* Submit butonu */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
