import { useState } from "react"; // State yönetimi için kullanılır
import "./components/Course/Course.css"; // Course bileşeni stili
import course from "./data/data"; // Kurs bilgilerini içe aktarır
import Header from "./components/Header/Header"; // Header bileşeni
import Course from "./components/Course/Course"; // Course bileşeni


/**
 * Klasör Adları: Küçük harflerle (örneğin components, assets, global styles).
Component Dosyaları: PascalCase (örneğin Header.jsx, Course.jsx).
Diğer Dosyalar: Küçük harflerle (örneğin index.css, data.jsx).

index.css: Genel stilleri ayarlar.
main.jsx: React uygulamasını başlatır.
App.jsx: Ana bileşeni oluşturur ve diğer bileşenleri çağırır.
Course.jsx: Tek bir kursu gösterir.
Header.jsx: Sayfa başlığını gösterir.
data.jsx: Kurs verilerini tutar.

  
  ├── index.html   → Uygulamanın HTML dosyası (proje kök dizininde)
  └── src/
        ├── assets/          → Görseller ve diğer statik dosyalar
        │     └── images/    → Görseller (eng-course.png, vb.)
        ├── components/      → React bileşenleri
        │     ├── Header/    → Header bileşeni
        │     │     ├── Header.jsx
        │     │     └── Header.css
        │     ├── Course/    → Course bileşeni
        │     │     ├── Course.jsx
        │     │     └── Course.css
        ├── data/            → Kurs verilerini tutan dosya
        │     └── data.jsx   → Kurs verileri
        ├── App.jsx          → Ana bileşen
        ├── index.css        → Genel stiller
        ├── index.jsx        → Uygulamanın başlatılacağı dosya
        └── main.jsx         → Uygulamanın başlatılması ve render edilmesi

 */
function App() {
  return (
    <div className="course-container">
      <Header /> {/* Header bileşeni çağırılır */}
      {course?.map((course) => (
        <Course key={course.id} course={course} /> 
      ))} {/* Kurs listesini map ile render eder */}
    </div>
  );
}

export default App;
