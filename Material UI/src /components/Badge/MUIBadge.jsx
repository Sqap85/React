import React from "react";
import { Badge, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

function MUIBadge() {
  return (
    <div style={{ margin: "10px" }}>
      {/* IconButton ile Badge etrafına bir ikon yerleştiriliyor */}
      <IconButton aria-label="mail">
        {/* Badge Bileşeni */}
        <Badge
          badgeContent={100} // Badge içeriği (örneğin, bildirim sayısı)
          color="secondary" // Badge rengi (primary, secondary, error, default)
          max={99} // Gösterilecek maksimum sayı (99'u geçmez)
          overlap="rectangular" // Badge'ın ikona nasıl örtüştüğünü belirler: "circular" veya "rectangular"
          anchorOrigin={{
            vertical: "top", // Badge'ın dikey konumu: 'top' veya 'bottom'
            horizontal: "right", // Badge'ın yatay konumu: 'left' veya 'right'
          }}
          showZero={true} // 0'ı gösterip göstermemeyi kontrol eder (false ise 0'ı göstermez)
        >
          {/* Badge'ın üzerine ikon yerleştiriliyor */}
          <MailIcon />
        </Badge>
      </IconButton>

      {/* İkinci Badge örneği, bildirimi pembe */}
      <IconButton aria-label="cart">
        <Badge
          badgeContent={0}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "pink",
              color: "white", // Rakamın rengini beyaz yapıyoruz
            },
          }}
          showZero={true} // 0'ı gösterip göstermemeyi kontrol eder (false ise 0'ı göstermez)
        >
          <MailIcon />
        </Badge>
      </IconButton>

      {/* Badge Bileşeni İkona Dıştan Sarılıyor */}
      <IconButton aria-label="mail">
        <Badge
          badgeContent={<NotificationsIcon />} // Rozet içeriği bir ikon
          color="primary"
          overlap="rectangular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MailIcon sx={{ fontSize: "40px" }} />
        </Badge>
      </IconButton>
    </div>
  );
}

export default MUIBadge;
