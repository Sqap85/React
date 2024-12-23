import React from "react";

// Material UI bileşenlerinden ImageList, ImageListItem, Typography, ve Box bileşenleri import ediliyor.
// Bu bileşenler, görselleri listelemek ve stil eklemek için kullanılır.
import { ImageList, ImageListItem, Typography, Box } from "@mui/material";

// Görseller ve başlıklar gibi verilerin bulunduğu itemData dosyası import ediliyor.
import itemData from "../../assets/itemData";

/**
 * Material UI ImageList Bileşeni:
 * - Görüntülerin düzenli bir şekilde listelenmesi için kullanılır.
 * - Responsive yapıya sahiptir. (Farklı ekran boyutlarına uyum sağlar.)
 */
function MUIImageList() {
  return (
    // Box bileşeni, tüm bileşeni bir kapsayıcı içine alır ve padding (p) ekler.
    // Burada p: 2, yani her tarafa 2 birimlik padding ekler.
    <Box sx={{ p: 2 }}>
      {/* Typography bileşeni başlık metnini görüntülemek için kullanılır. */}
      {/* "variant" özelliği, metnin stilini belirler, burada "h4" başlık stilinde. */}
      {/* "gutterBottom" metnin altına boşluk ekler. */}
      <Typography variant="h4" gutterBottom>
        Görseller Listesi
      </Typography>

      {/* ImageList bileşeni, görselleri grid (ızgara) şeklinde düzenler. */}
      {/* "cols" özelliği, griddeki sütun sayısını belirtir, burada 2 sütun var. */}
      {/* "gap" özelliği, öğeler arasındaki boşluğu ayarlamak için kullanılır, burada 15px boşluk var. */}
      <ImageList cols={2} gap={15}>
        {/* itemData dizisi üzerinde map fonksiyonu ile her bir öğe için ImageListItem oluşturuluyor. */}
        {/* "item" her bir görselin verilerini içeriyor, "index" ise öğenin benzersiz anahtarı için kullanılıyor. */}
        {itemData.map((item, index) => (
          // Her bir öğe için ImageListItem oluşturuluyor.
          // "key" özelliği, React'in her öğeyi benzersiz bir şekilde tanıyabilmesi için gereklidir.
          <ImageListItem key={index}>
            {/* Görsel öğesi */}
            <img
              // Görsel kaynağı (src), itemData'dan alınıyor (item.img).
              src={item.img}
              // Görselin açıklaması (alt), itemData'dan alınıyor (item.title).
              alt={item.title}
              // Görsellerin sayfa yüklenirken yavaşça yüklenmesini sağlamak için "lazy" özelliği kullanılıyor.
              loading="lazy"
              // Görsellerin köşelerine yuvarlaklık eklemek için stil uygulanıyor.
              style={{ borderRadius: "8px" }}
            />

            {/* Görselin başlığı */}
            <Typography variant="subtitle1" textAlign="center" mt={1}>
              {/* Başlık, itemData'dan alınıyor (item.title). */}
              {item.title}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

// Bu bileşeni dışa aktararak başka dosyalarda kullanılmasını sağlıyoruz.
export default MUIImageList;
