import React from "react";
import { Box } from "@mui/material";

// Box == div
/**Box aslında bir div elementinin yerine geçer, ancak MUI tarafından sağlanan özelliklerle daha gelişmiş stil ve düzenleme imkanları sunar.
 * BIR BOKA YARAMAZ.
 */
function MUIBox() {
  return (
    <Box
      sx={{
        padding: 2, // Box içine iç boşluk ekler
        margin: 2, // Box'a dış boşluk ekler
        backgroundColor: "lightblue", // Arka plan rengini değiştirir
        borderRadius: 2, // Köşeleri yuvarlatır
        boxShadow: 3, // Gölgeleme ekler
        display: "flex", // Flexbox düzeni kullanır
        justifyContent: "center", // İçindeki öğeleri yatayda ortalar
        alignItems: "center", // İçindeki öğeleri dikeyde ortalar
        height: "100px", // Yükseklik ayarı
        width: "200px", // Genişlik ayarı
      }}
    >
      MUIBox
    </Box>
  );
}

export default MUIBox;
