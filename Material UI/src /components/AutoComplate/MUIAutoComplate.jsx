// Material-UI kütüphanesinden gerekli bileşenler import ediliyor
import { Autocomplete, TextField } from "@mui/material";
import React from "react";
// 'top100Films' dizisi, assets klasöründeki bir dosyadan import ediliyor
import top100Films from "../../assets/top100Films.jsx";

function MUIAutoComplate() {
  return (
    <div style={{ margin: 50 }}>
      {/* Autocomplete bileşeni, arama kutusu için kullanılıyor */}
      <Autocomplete
        // 'disablePortal', açılır listenin portal içinde değil, parent DOM'da render edilmesini sağlar
        disablePortal
        // 'options' özelliği, açılır listede gösterilecek olan film verisini alır
        options={top100Films}
        // 'sx' prop'u, bileşene özel stil eklemek için kullanılır. Burada genişlik 300px olarak belirlenmiş
        sx={{ width: 300 }}
        // 'renderInput' özelliği, Autocomplete bileşenine bir input alanı (TextField) ekler
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
}

// Bu bileşen, başka yerlerde kullanılmak üzere dışa aktarılır
export default MUIAutoComplate;
