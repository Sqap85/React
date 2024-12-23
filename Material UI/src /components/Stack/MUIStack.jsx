import React from 'react';
import { Stack, Button, Typography } from '@mui/material';

/**MUI Stack, Material UI (MUI) kütüphanesinde, öğeleri düzenlemek ve sıralamak için kullanılan bir bileşendir. Stack, özellikle esnek (flexbox) düzenleri kolayca yönetmek için kullanılır ve öğeler arasında boşlukları, hizalamayı ve sıralamayı kontrol etmek için çok faydalıdır. Temelde, Stack bileşeni bir dizi öğeyi bir araya getirerek, onların düzenini ve hizalanmasını kolayca kontrol etmeye olanak sağlar. */

function MUIStack() {
  return (
    <div style={{ margin: '50px' }}>
      {/* Stack bileşenini oluşturuyoruz, responsive özellikleriyle */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }} // 'xs' (telefonlar için) dikey, 'sm' (tabletler ve daha büyük ekranlar için) yatay düzen
        spacing={2} // Öğeler arasındaki boşluğu 2 birim yapıyoruz
        alignItems="center" // Öğeleri dikeyde ortalıyoruz (center)
        justifyContent="space-between" // Öğeler arasına eşit boşluk bırakıyoruz (space-between)
        sx={{
          padding: 2, 
          backgroundColor: '#f0f0f0', 
        }}
      >
        {/* Stack içindeki her öğe */}
        <Button variant="contained">Button 1</Button> {/* Buton 1 */}
        <Button variant="outlined">Button 2</Button> {/* Buton 2 */}
        <Button variant="text">Button 3</Button> {/* Buton 3 */}
        <Typography variant="h6">Title</Typography> {/* Başlık */}
      </Stack>
    </div>
  );
}

export default MUIStack;
