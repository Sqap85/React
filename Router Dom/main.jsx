import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// React Router DOM kütüphanesinden BrowserRouter bileşenini içe aktarıyoruz.
// BrowserRouter, React uygulamasında yönlendirme (routing) işlevselliğini sağlar.
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // BrowserRouter ile App bileşenini sarmalıyoruz.
  // Bu, uygulama içinde yönlendirme yapmamıza olanak tanır.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
