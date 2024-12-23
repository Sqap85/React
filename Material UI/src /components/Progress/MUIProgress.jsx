import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

function MUIProgress() {
  // Durum yönetimi için "loading" ve "success" state'leri tanımlanıyor
  const [loading, setLoading] = React.useState(false); // Yüklenme durumu için state
  const [success, setSuccess] = React.useState(false); // İşlem başarısını kontrol eden state

  // Buton stili başarı durumuna göre değişiyor
  const buttonSx = {
    ...(success && {
      bgcolor: green[500], // Başarılı olduğunda buton yeşil renge döner
      '&:hover': {
        bgcolor: green[700], // Hover sırasında daha koyu yeşil
      },
    }),
  };

  // Butona tıklama olayını işleyen fonksiyon
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false); // Başarı durumu sıfırlanır
      setLoading(true); // Yüklenme başlatılır
      setTimeout(() => {
        setSuccess(true); // Yüklenme tamamlanınca başarı durumu etkinleştirilir
        setLoading(false); // Yüklenme durumu kapatılır
      }, 2000); // 2 saniye sonra işlem tamamlanır
    }
  };

  return (
    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={4}>
      {/* Linear Progress Örnekleri */}
      <LinearProgress color="secondary" /> {/* Mor renkli ilerleme çubuğu */}
      <LinearProgress color="success" /> {/* Yeşil renkli ilerleme çubuğu */}
      <LinearProgress color="inherit" /> {/* Varsayılan renkli ilerleme çubuğu */}

      {/* Circular Progress Örnekleri */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <CircularProgress /> {/* Varsayılan renkli dairesel ilerleme */}
        <CircularProgress color="secondary" /> {/* Mor renkli dairesel ilerleme */}
        <CircularProgress color="success" /> {/* Yeşil renkli dairesel ilerleme */}
      </Box>

      {/* Etkileşimli Buton ile Progress */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
        {/* Floating Action Button (FAB) */}
        <Box sx={{ m: 1, position: 'relative' }}>
          <Fab
            aria-label="save" // Erişilebilirlik etiketi
            color="primary" // Varsayılan mavi renk
            sx={buttonSx} // Başarı durumuna göre stil
            onClick={handleButtonClick} // Tıklama olayını işler
          >
            {success ? <CheckIcon /> : <SaveIcon />} {/* Başarı durumuna göre ikon */}
          </Fab>
          {loading && ( // Yüklenme sırasında dairesel ilerleme gösterilir
            <CircularProgress
              size={68} // Dairesel ilerlemenin boyutu
              sx={{
                color: green[500], // Yeşil renkli dairesel ilerleme
                position: 'absolute', // FAB üzerinde konumlandırılır
                top: -6,
                left: -6,
                zIndex: 1, // FAB'nin üzerinde gösterilir
              }}
            />
          )}
        </Box>
        {/* Normal Buton */}
        <Button
          variant="contained" // Dolgulu buton stili
          color="primary" // Varsayılan mavi renk
          disabled={loading} // Yüklenme sırasında buton devre dışı bırakılır
          onClick={handleButtonClick} // Tıklama olayını işler
          sx={buttonSx} // Başarı durumuna göre stil
        >
          {loading ? 'Loading...' : 'Submit'} {/* Yüklenme durumuna göre metin */}
        </Button>
      </Box>
    </Stack>
  );
}

export default MUIProgress;
