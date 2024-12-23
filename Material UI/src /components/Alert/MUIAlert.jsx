import React, { useState } from "react";
import { Alert, AlertTitle, Button } from "@mui/material";

/**
 * MUIAlert bileşeni, çeşitli MUI alert türlerini içerir.
 */
function MUIAlert() {
  const [alertOpen, setAlertOpen] = useState(true);
  const [alertClosed, setAlertClosed] = useState(false);

  // "CLOSE" ve "UNDO" işlemleri
  const handleClose = () => setAlertOpen(false);
  const handleUndo = () => setAlertOpen(true);

  // "Alert has been closed" state'i için Closeable Alert'in durumu
  const handleCloseClosable = () => setAlertClosed(true);
  const handleUndoClosable = () => setAlertClosed(false);

  return (
    <div style={{ margin: "20px" }}>
      <h3>Basic Alert</h3>
      {/* Temel Alert */}
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an info message!</Alert>
      <Alert severity="success">This is a success message!</Alert>

      <h3>Alert with Title</h3>
      {/* Başlık ile birlikte Alert */}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error message with a title.
      </Alert>

      <h3>Alert with Action Button</h3>
      {/* Aksiyon butonuyla birlikte Alert */}
      <Alert
        severity="info"
        action={
          <Button color="inherit" size="small" onClick={handleUndo}>
            UNDO
          </Button>
        }
      >
        This is an info message with an action button.
      </Alert>

      <h3>Outlined Alert</h3>
      {/* Outline (çerçeveli) Alert */}
      <Alert variant="outlined" severity="success">
        This is a success message with outline.
      </Alert>

      <h3>Filled Alert</h3>
      {/* Dolu Alert */}
      <Alert variant="filled" severity="success">
        This is a success message with filled variant.
      </Alert>

      <h3>Custom Color Alert</h3>
      {/* Özelleştirilmiş renk ile Alert */}
      <Alert
        sx={{ backgroundColor: "#ffcc00", color: "black" }}
        severity="warning"
      >
        This is a custom color warning message.
      </Alert>

      <h3>Alert with Dismiss Button</h3>
      {/* Kapatma butonuyla birlikte Alert */}
      {alertOpen && (
        <Alert
          severity="warning"
          action={
            <Button color="inherit" size="small" onClick={() => handleClose()}>
              CLOSE
            </Button>
          }
        >
          This is a warning message with a close button.
        </Alert>
      )}

      <h3>Closeable Alert</h3>
      {/* Kapanabilir Alert */}
      {alertOpen ? (
        <Alert
          severity="info"
          action={
            <>
              <Button color="inherit" size="small" onClick={handleClose}>
                CLOSE
              </Button>
            </>
          }
        >
          This is a closable info message.
        </Alert>
      ) : (
        <Alert severity="warning">
          Alert has been closed! Click UNDO to bring it back.
        </Alert>
      )}

      {/* Closeable Alert'in kapanması */}
      {alertClosed && (
        <Alert
          severity="info"
          action={
            <Button color="inherit" size="small" onClick={handleUndoClosable}>
              UNDO
            </Button>
          }
        >
          The alert was closed, click UNDO to bring it back.
        </Alert>
      )}
    </div>
  );
}

export default MUIAlert;
