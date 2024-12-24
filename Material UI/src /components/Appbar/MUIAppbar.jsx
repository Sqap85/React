import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Stack,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Material UI AppBar Bileşeni:
 * Bu örnek, modern bir başlık çubuğu (AppBar) oluşturur. İçeriği şunları içerir:
 * - Başlık metni (Typography)
 * - İki aksiyon düğmesi (Login ve Sign Up)
 * - Bir hamburger menü simgesi ve açılır menü (Menu ve MenuItem)
 */
function MUIAppbar() {
  // Açılır menü durumu: Menü ikonuna tıklayınca açılır veya kapanır
  const [anchorEl, setAnchorEl] = useState(null);

  /**
   * handleMenuOpen:
   * Menü ikonuna tıklandığında çağrılır ve
   * menüyü açmak için `anchorEl` state'ini günceller.
   */
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Tıklanan öğeyi referans olarak saklar
  };

  /**
   * handleMenuClose:
   * Menü dışına tıklanıldığında çağrılır ve menüyü kapatır.
   */
  const handleMenuClose = () => {
    setAnchorEl(null); // State'i null yaparak menüyü kapatır
  };

  return (
    <div>
      {/* AppBar: Uygulamanın üst kısmındaki sabit başlık çubuğu */}
      <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
{/*         static: Sayfanın yukarısında ve normal akışta kalması gereken durumlarda kullanılır.
sticky: Sayfa kaydırıldığında üstte sabit kalmasını istediğiniz durumlarda kullanılır.
fixed: Sayfa kaydırıldığında her zaman görünür olmasını istediğiniz durumlarda kullanılır.
absolute: Konumunun sayfa akışından bağımsız olmasını ve üstte sabit kalmasını istediğiniz durumlarda kullanılır.
relative: Normal konumlamada ama yerel bir düzenleme yapmak istediğiniz durumlarda kullanılır. */}
        <Toolbar>
          {/* Typography: Başlık metni. `flexGrow` özelliği, diğer öğelerle genişleme davranışı sağlar */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Application
          </Typography>

          {/* Stack: Login ve Sign Up düğmelerini yatay bir düzen içinde hizalar */}
          <Stack direction="row" spacing={2}>
            {/* Login düğmesi */}
            <Button color="inherit">Login</Button>
            {/* Sign Up düğmesi */}
            <Button color="inherit">Sign Up</Button>
          </Stack>

          {/* IconButton: Menü simgesini barındıran düğme */}
          <IconButton
            color="inherit" // Simgenin rengini AppBar ile uyumlu yapar
            edge="end" // İkonu sağ tarafa hizalar
            aria-label="menu" // Erişilebilirlik için açıklama ekler
            onClick={handleMenuOpen} // Tıklandığında menüyü açar
          >
            <MenuIcon /> {/* Menü simgesi (hamburger menü) */}
          </IconButton>

          {/* Menu: Açılır menü, belirli bir öğeye bağlı olarak gösterilir */}
          <Menu
            anchorEl={anchorEl} // Menü başlangıç pozisyonunu belirler
            open={Boolean(anchorEl)} // Menü açık mı kontrol eder
            onClose={handleMenuClose} // Menü dışında bir yere tıklayınca kapatır
            anchorOrigin={{ vertical: "top", horizontal: "right" }} // Menü başlangıç konumu
            transformOrigin={{ vertical: "top", horizontal: "right" }} // Menü dönüş noktası
          >
            {/* MenuItem: Menü öğelerini tanımlar */}
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MUIAppbar;
