import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function MUISnackbar() {
  // Snackbar durumları için başlangıç değerleri belirleniyor
  const [state, setState] = React.useState({
    open: false, // Snackbar'ın açık olup olmadığını belirtir
    vertical: 'top', // Snackbar'ın dikey pozisyonu ("top" veya "bottom")
    horizontal: 'center', // Snackbar'ın yatay pozisyonu ("left", "center", "right")
    severity: 'info', // Snackbar'ın türü ("success", "error", "warning", "info")
    message: 'Default message', // Snackbar'da görüntülenen varsayılan mesaj
    autoHideDuration: 3000, // Snackbar'ın otomatik olarak kapanma süresi (ms)
  });

  const { vertical, horizontal, open, severity, message, autoHideDuration } = state;

  // Snackbar'ı tetikleyen fonksiyon
  const handleClick = (newState) => () => {
    setState({ ...state, ...newState, open: true }); // Yeni durumlarla Snackbar açılır
  };

  // Snackbar'ı kapatma fonksiyonu
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      // Kullanıcı bir tıklama dışında bir işlemle kapatma yaparsa işlem yapılmaz
      return;
    }
    setState({ ...state, open: false }); // Snackbar kapatılır
  };

  // Farklı pozisyon ve türlerde butonları render eden kısım
  const buttons = (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button
          variant="contained"
          onClick={handleClick({ vertical: 'top', horizontal: 'center', message: 'Top-Center', severity: 'info' })}
        >
          Top-Center (Info)
        </Button>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={handleClick({ vertical: 'top', horizontal: 'left', message: 'Top-Left', severity: 'success' })}
          >
            Top-Left (Success)
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            onClick={handleClick({ vertical: 'top', horizontal: 'right', message: 'Top-Right', severity: 'error' })}
          >
            Top-Right (Error)
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="warning"
            onClick={handleClick({ vertical: 'bottom', horizontal: 'left', message: 'Bottom-Left', severity: 'warning' })}
          >
            Bottom-Left (Warning)
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick({ vertical: 'bottom', horizontal: 'right', message: 'Bottom-Right', severity: 'info' })}
          >
            Bottom-Right (Info)
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="outlined"
          onClick={handleClick({ vertical: 'bottom', horizontal: 'center', message: 'Bottom-Center', severity: 'info', autoHideDuration: 5000 })}
        >
          Bottom-Center (Longer Duration)
        </Button>
      </Box>
    </>
  );

  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto', mt: 4 }}>
      {buttons} {/* Butonlar görüntüleniyor */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }} // Snackbar'ın pozisyonunu ayarlar
        open={open} // Snackbar'ın açık olup olmadığını kontrol eder
        autoHideDuration={autoHideDuration} // Otomatik kapanma süresini belirler
        onClose={handleClose} // Kapatma olayını işler
        key={`${vertical}-${horizontal}`} // Her pozisyon için benzersiz bir anahtar
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}> {/* Snackbar mesajı */}
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default MUISnackbar;
