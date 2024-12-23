import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

function MUIDrawer() {
  const [open, setOpen] = useState(false);

  // Drawer'ı açma/kapama fonksiyonu
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Menü simgesi ile Drawer'ı açma */}
      <IconButton onClick={toggleDrawer}>
        <MenuIcon sx={{ fontSize: "40px" }} />
      </IconButton>

      {/* Drawer bileşeni */}
      <Drawer
        anchor="left" // Drawer'ın sağda (right) veya solda (left) açılacağını belirler.
        open={open} // Drawer'ın açık olup olmadığını kontrol eder.
        onClose={toggleDrawer} // Drawer kapatıldığında çalışacak fonksiyon.
      >
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List sx={{ width: "200px" }}>
            <ListItem button>
              <ListItemText primary="Ana Sayfa" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Hakkında" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="İletişim" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default MUIDrawer;
