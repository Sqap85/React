import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login"; // 'Login' bileşenini içe aktarıyoruz. (İstersek Login yerine farklı bir ad verebilirdik çünkü default export olduğu için)
import { users } from "./Login"; // 'Login' bileşeninden 'users' adlı diziyi içe aktarıyoruz.

function App() {
  console.log(users); // 'Login' bileşeninden aldığımız 'users' dizisini konsola yazdırıyoruz.

  return (
    <div>
      <Login />
      {/* 'Login' bileşenini çağırıyoruz */}
     
    </div>
  );
} 

export default App;