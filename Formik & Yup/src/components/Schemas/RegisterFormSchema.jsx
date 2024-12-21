import * as yup from 'yup';

// Formik için doğrulama şeması tanımlıyoruz
export const RegisterFormSchema = yup.object().shape({
  email: yup
    .string() // email, bir string olmalı
    .email("Please enter a valid email address!") // Geçerli bir e-posta adresi olmalı
    .required("Email is required!"), // E-posta zorunlu

  age: yup
    .number() // Yaş, bir sayı olmalı
    .positive("Age must be a positive number!") // Yaş pozitif bir sayı olmalı
    .integer("Age must be an integer!") // Yaş tam sayı olmalı
    .required("Age is required!"), // Yaş zorunlu

  password: yup
    .string() // Şifre, bir string olmalı
    .min(6, "Password must be at least 6 characters long!") // Şifre en az 6 karakter olmalı
    .required("Password is required!"), // Şifre zorunlu

  confirmPassword: yup
    .string() // Şifre onayı, bir string olmalı
    .oneOf([yup.ref('password'), null], "Passwords must match!") // Şifre ile onay şifresi birbirini eşleştirmeli
    .required("Please confirm your password!"), // Şifre onayı zorunlu

  term: yup
    .boolean() // Kullanıcı, şartları kabul etmelidir
    .oneOf([true], "You must accept the terms and conditions!") // Şartlar kabul edilmeli (true)
    .required("You must accept the terms and conditions!"), // Şartlar zorunlu
});
