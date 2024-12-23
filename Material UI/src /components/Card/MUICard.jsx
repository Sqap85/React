import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

/**
 * Material UI Card Bileşeni:
 * `Card`, içeriği bir arada tutmak ve görsel olarak şık bir şekilde düzenlemek için kullanılan bir bileşendir.
 * Genellikle ürün tanıtımları, profil kartları, haber başlıkları gibi içerikler için kullanılır.
 */
function MUICart() {
  return (
    <div style={{ margin: "50px", display: "flex", justifyContent: "center" }}>
      {/* Card: Kartın ana bileşenidir. İçeriği gruplar. */}
      <Card sx={{ maxWidth: 345 }}>
        {/* CardMedia: Kartta görsel içerik eklemek için kullanılır. Genellikle bir resim, video veya herhangi bir medya dosyasını içerir. */}
        <CardMedia
          component="img"
          height="200"
          image="src/assets/images/a.png"
          alt="Card image"
        />

        {/* CardContent: Kartın içeriğini (başlık, açıklama, vb.) eklemek için kullanılır. */}
        <CardContent>
          {/* Typography: Metin içeriği eklemek için kullanılır. */}
          <Typography gutterBottom variant="h5" component="div">
            Product Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A brief description of the product goes here. It might describe
            features, specifications, or general information.
          </Typography>
        </CardContent>

        {/* CardActions: Kart üzerindeki eylem butonları, linkler veya diğer etkileşimli öğeleri eklemek için kullanılır. */}
        <CardActions>
          {/* Button: Kartın alt kısmına bir buton ekler. */}
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Button size="small" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MUICart;
