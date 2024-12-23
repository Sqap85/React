import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";

/**
 * MUI Grid Bileşeni:
 * Material UI kütüphanesindeki Grid bileşeni, responsive ve esnek bir ızgara düzeni oluşturmak için kullanılır.
 * Bu bileşen, öğeleri sütunlar ve satırlar halinde düzenlemek için flexbox tabanlıdır ve düzeni çok kolay yönetmenizi sağlar.
 * Özellikle karmaşık düzenlerde öğeleri hizalamak için kullanışlıdır.
 */
function MUIGrid() {
  return (
    <div style={{ margin: "50px" }}>
      {/* 
        Grid container:
        Bu, Grid düzeninin ana kapsayıcısıdır. 
        İçindeki öğeleri (grid item) düzenler ve `spacing={3}` ile öğeler arasındaki boşluğu ayarlıyoruz.
      */}
      <Grid container spacing={3}>
        {/* 
          Grid item:
          Her bir öğe (element) için bir alan tanımlar.
          `xs={12}`, `sm={6}`, `md={4}` gibi özelliklerle, ekran boyutlarına göre öğelerin genişliğini ayarlıyoruz. 
          - `xs`: Extra small (çok küçük) ekranlar için geçerli olan özellik, 12 birim genişlik verir (yani ekranın tamamını kaplar).
          - `sm`: Small (küçük) ekranlar için, 6 birim genişlik verir (yani ekranın yarısını kaplar).
          - `md`: Medium (orta büyüklükteki) ekranlar için, 4 birim genişlik verir (yani ekranın üçte birini kaplar).
        */}
        <Grid item xs={12} sm={6} md={4}>
          {/* 
            Paper:
            Material-UI'nin `Paper` bileşeni, öğelere şık bir arka plan ve gölge efekti ekler.
            Bu, görsel olarak kağıt benzeri bir yüzey görünümü sağlar.
            `elevation={3}` ile gölgenin derinliği (gölge efekti) belirlenir. 
            Sayfanın arka planına hafif bir derinlik katmak için kullanılır.
          */}
          <Paper elevation={3} style={{ padding: "20px" }}>
            {/* Typography: Bu, metinleri biçimlendirmek için kullanılan bir bileşendir. Burada başlık olarak kullanılıyor. */}
            <Typography variant="h6">Item 1</Typography>
            {/* Button: Buton öğesi, tıklanabilir bir öğe oluşturur. `variant="contained"` butonun dolgu şeklini, `color="primary"` ise rengini belirler. */}
            <Button variant="contained" color="primary">
              Button 1
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Item 2</Typography>
            <Button variant="contained" color="secondary">
              Button 2
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Item 3</Typography>
            <Button variant="contained" color="success">
              Button 3
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MUIGrid;
