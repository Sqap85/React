import React from "react";
import { Button } from "@mui/material";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

function MUIButton() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      {/* Renkler */}
      <div>
        <h3>Colors</h3>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
      </div>

      {/* Varyasyonlar */}
      <div>
        <h3>Variants</h3>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </div>

      {/* Boyutlar */}
      <div>
        <h3>Sizes</h3>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>

      {/* Disable Özellikleri */}
      <div>
        <h3>Disabled</h3>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
      </div>

      {/* Başlangıç İkonları */}
      <div>
        <h3>Start Icons</h3>
        <Button
          variant="contained"
          color="primary"
          startIcon={
            <span>
              <CoffeeMakerIcon />
            </span>
          }
        >
          Star
        </Button>
        <Button variant="contained" color="success" startIcon={<span>✔</span>}>
          Check
        </Button>
      </div>

      {/* Son İkonlar */}
      <div>
        <h3>End Icons</h3>
        <Button
          variant="outlined"
          color="warning"
          size="large"
          endIcon={<CurrencyBitcoinIcon />}
        >
          Buy
        </Button>
        <Button variant="outlined" color="error" endIcon={<span>✖</span>}>
          Cancel
        </Button>
      </div>

      {/* Tam Genişlik (Full Width) */}
      <div>
        <h3>Full Width</h3>
        <Button variant="contained" color="primary" fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
  );
}

export default MUIButton;
