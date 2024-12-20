// React'ın useState hook'unu ve App.css dosyasını içe aktarıyoruz.
// useState: Bileşen seviyesinde durum yönetimi sağlar.
import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList.jsx";

function App() {
  return (
    <div>
      <UserList/>
    </div>
  );
}

export default App;
